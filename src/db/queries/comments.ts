import { Comment } from '@prisma/client';
import { db } from '..';

export type CommentWithData = Comment & {
	user: { name: string | null; image: string | null };
};

export async function fetchCommentByPostId(
	postId: string
): Promise<CommentWithData[]> {
	return db.comment.findMany({
		where: { postId },
		include: { user: { select: { name: true, image: true } } },
	});
}
