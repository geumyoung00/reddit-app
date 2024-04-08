import CommentShow from '@/components/comments/comment-show';
import { CommentWithData } from '@/db/queries/comments';
import { Comment } from '@prisma/client';

interface CommentListProps {
	comments: CommentWithData[];
}

// TODO: 댓글 목록을 가져와주세요:
export default async function CommentList({ comments }: CommentListProps) {
	const topLevelComments = comments.filter(
		comment => comment.parentId === null
	);

	const renderedComments = topLevelComments.map(comment => {
		return (
			<CommentShow
				key={comment.id}
				commentId={comment.id}
				comments={comments}
			/>
		);
	});

	return (
		<div className='space-y-3'>
			<h1 className='text-lg font-bold'>All {comments.length} comments</h1>
			{renderedComments}
		</div>
	);
}
