'use server';

import { db } from '@/db';
import { path } from '@/path';
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

export async function createTopic(formState: Errors, formData: FormData) {
	const name = formData.get('name');
	const description = formData.get('description');

	const result = schema.safeParse({ name, description });
	if (!result.success) {
		return { errors: result.error?.flatten().fieldErrors };
	}

	try {
		await db.topic.create({
			data: { slug: result.data.name, description: result.data.description },
		});

		console.log(db.topic.findMany());
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
	// redirect(`/topics/${path.topicView()}`);
}
