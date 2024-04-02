'use client';

import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@nextui-org/react';

export default function PostCreateForm() {
	return (
		<Popover placement='bottom-end'>
			<PopoverTrigger>
				<Button color='primary'>New Post</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form>
					<div className='flex flex-col gap-4 p-4 w-80'>
						<h3 className='text-lg'>Create a Post</h3>
						<Input
							name='title'
							label='Title'
							labelPlacement='outside'
							placeholder='Title'
						/>
						<Textarea
							name='content'
							label='Content'
							labelPlacement='outside'
							placeholder='Content'
						/>
						<Button type='submit'>제출</Button>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
