'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { paths } from '@/paths';
import { Topic } from '@prisma/client';
import github from 'next-auth/providers/github';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';

const schema = z.object({
	name: z
		.string()
		.min(5, { message: '제목이 너무 짧네요.' })
		.regex(/^[a-zA-Z-]+$/, { message: '영어만 입력할 수 있어요.' }),
	description: z.string().min(10, { message: '내용을 더 써야 해요.' }),
});

interface Errors {
	errors: { name?: string[]; description?: string[]; _form?: string };
}

export async function createTopic(
	formState: Errors,
	formData: FormData
): Promise<Errors> {
	// await new Promise(resolve => setTimeout(resolve, 2000));
	const session = await auth();
	const name = formData.get('name');
	const description = formData.get('description');

	const result = schema.safeParse({ name, description });
	if (!result.success) {
		return { errors: result.error?.flatten().fieldErrors };
	}

	let topicData: Topic;
	try {
		if (!session) {
			return { errors: { _form: '로그인이 필요합니다.' } };
		}
		topicData = await db.topic.create({
			data: { slug: result.data.name, description: result.data.description },
		});
		// throw new Error('예기치 못한 오류');
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

	revalidatePath('/');
	redirect(paths.topicView(topicData.slug));
}
