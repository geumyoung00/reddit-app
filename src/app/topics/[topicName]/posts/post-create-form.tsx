'use client';

import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@nextui-org/react';
import { useFormState } from 'react-dom';
import { createPost } from '@/actions';
import { useParams } from 'next/navigation';
import FormButton from '@/components/common/form-button';

export default function PostCreateForm({ topicName }: { topicName: string }) {
	const [formState, formAction] = useFormState(
		createPost.bind(null, topicName),
		{
			errors: {},
		}
	);
	return (
		<Popover placement='bottom-end'>
			<PopoverTrigger>
				<Button color='primary'>New Post</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form action={formAction}>
					<div className='flex flex-col gap-4 p-4 w-80'>
						<h3 className='text-lg'>Create a Post</h3>
						<Input
							name='title'
							label='Title'
							labelPlacement='outside'
							placeholder='Title'
							isInvalid={!!formState.errors.title}
							errorMessage={formState.errors.title}
						/>
						<Textarea
							name='content'
							label='Content'
							labelPlacement='outside'
							placeholder='Content'
							isInvalid={!!formState.errors.content}
							errorMessage={formState.errors.content}
						/>
						{formState.errors._form ? (
							<div className='rounded p-2 bg-red-200 border border-red-400'>
								{formState.errors._form}
							</div>
						) : (
							''
						)}
						<FormButton>submit</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
