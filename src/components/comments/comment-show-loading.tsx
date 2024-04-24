import { Skeleton } from '@nextui-org/react';
export default function CommentShowLoading() {
	return (
		<div className='flex gap-3 border p-4'>
			<Skeleton className='h-10 w-10 rounded-full' />
			<div className='flex-1 space-y-3p-4 rounded space-y-2'>
				<Skeleton className='h-5 w-36 rounded' />
				<Skeleton className='h-6 w-80 rounded' />
				<Skeleton className='h-6 w-12 rounded' />
			</div>
		</div>
	);
}
