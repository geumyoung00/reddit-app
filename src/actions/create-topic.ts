'use server';

import * as actions from '@/actions';
import { revalidatePath } from 'next/cache';

export async function createTopic(formData: FormData) {
	await actions.createTopic(formData);
	// revalidatePath('/');
}
