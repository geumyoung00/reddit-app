'use server';

import * as actions from '@/actions';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import z from 'zod';

const schema = z.object({
	name: z
		.string()
		.min(5, { message: '제목이 너무 짧네요.' })
		.regex(/^[a-zA-Z-]+$/, { message: '영어만 입력할 수 있어요.' }),
	description: z.string().min(10, { message: '내용을 더 써야 해요.' }),
});

interface Errors {
	errors: { name?: string[]; description?: string[]; _form?: string[] };
}

export async function createTopic(formState: Errors, formData: FormData) {
	const name = await formData.get('name');
	const description = formData.get('description');

	const result = schema.safeParse({ name, description });
	if (!result.success) {
		console.log(result.error?.flatten().fieldErrors);
		return { errors: result.error?.flatten().fieldErrors };
	}

	try {
		db.topic.create({ data: { slug: name, description: description } });
	} catch (error) {
		if (error instanceof Error) {
		}
	}

	// revalidatePath('/');
	return { errors: {} };
}
