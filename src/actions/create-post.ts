'use server';

import z from 'zod';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { db } from '@/db';
import { Post } from '@prisma/client';
import { paths } from '@/paths';
import { redirect } from 'next/navigation';
import { chownSync } from 'fs';

interface Errors {
	errors: { title?: string[]; content?: string[]; _form?: string };
}

const schema = z.object({
	title: z
		.string()
		.min(3, { message: '제목이 너무 짧네요.' })
		.regex(/^[a-zA-Z-]+$/, { message: '영어만 입력할 수 있어요.' }),
	content: z.string().min(5, { message: '내용을 더 써야 해요.' }),
});

export async function createPost(
	topicName: string,
	formState: Errors,
	formData: FormData
): Promise<Errors> {
	const session = await auth();
	const findTopic = await db.topic.findFirst({
		where: {
			slug: topicName,
		},
	});

	const title = formData.get('title');
	const content = formData.get('content');
	const userId = session?.user?.id;
	const topicId = findTopic?.id;

	const result = schema.safeParse({ title, content });

	if (!result.success) {
		return { errors: result.error?.flatten().fieldErrors };
	}

	let postData: Post;
	try {
		if (!userId) {
			return { errors: { _form: '로그인이 필요합니다.' } };
		} else if (!topicId) {
			return { errors: { _form: '해당하는 topic이 없습니다.' } };
		} else {
			postData = await db.post.create({
				data: {
					title: result.data.title,
					content: result.data.content,
					userId: userId,
					topicId: topicId,
				},
			});
		}
	} catch (error) {
		if (error instanceof Error) {
			return {
				errors: {
					_form: error.message,
				},
			};
		} else {
			return {
				errors: {
					_form: '잠시 후 다시 시도해주세요.',
				},
			};
		}
	}
	revalidatePath('/topics/[topicName]');
	redirect(paths.postView(postData.id, topicName));
}
