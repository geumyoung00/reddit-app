'use server';

import * as auth from '@/auth';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function createTopic(topic: NextRequest) {
	await auth.POST(topic);
	revalidatePath('/');
}
