'use server';

import * as auth from '@/auth';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function createPost(post: NextRequest) {
	await auth.POST(post);
	// revalidatePath('/topics/[topicName]');
}
