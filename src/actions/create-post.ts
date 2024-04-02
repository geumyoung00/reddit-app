'use server';

import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function createPost(formData: FormData) {
	console.log(formData);
	// revalidatePath('/topics/[topicName]');
}
