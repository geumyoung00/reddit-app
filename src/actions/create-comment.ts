'use server';

import * as auth from '@/auth';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function createComment(comment: NextRequest) {
	await auth.POST(comment);
	// revalidatePath('/topics/[slug]/posts/[postId]');
}
