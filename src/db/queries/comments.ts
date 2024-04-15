import { Comment } from '@prisma/client';
import { cache } from 'react';
import { db } from '..';

export type CommentWithData = Comment & {
	user: { name: string | null; image: string | null };
};

export const fetchCommentByPostId = cache(
	async (postId: string): Promise<CommentWithData[]> => {
		console.log('fetching');
		return db.comment.findMany({
			where: { postId },
			include: { user: { select: { name: true, image: true } } },
		});
	}
);

export default fetchCommentByPostId;
