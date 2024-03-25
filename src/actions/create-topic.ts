'use server';

import * as actions from '@/actions';
import { revalidatePath } from 'next/cache';
import z from 'zod';

const schema = z.object({
	name: z
		.string()
		.min(5, { message: '제목이 너무 짧네요.' })
		.regex(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, { message: '한글만 입력할 수 있어요.' }),
	description: z.string().min(10, { message: '내용을 더 써야 해요.' }),
});

export async function createTopic(formData: FormData) {
	const name = formData.get('name');
	const description = formData.get('description');

	const result = schema.safeParse({ name, description });
	if (!result.success) {
		console.log(result.error.flatten().fieldErrors);
	}
	// revalidatePath('/');
}
