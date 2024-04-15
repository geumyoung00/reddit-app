import CommentShow from '@/components/comments/comment-show';
import { CommentWithData, fetchCommentByPostId } from '@/db/queries/comments';

interface CommentListProps {
	comments: CommentWithData[];
}

// TODO: 댓글 목록을 가져와주세요:
export default async function CommentList({ postId }: { postId: string }) {
	const comments = await fetchCommentByPostId(postId);

	const topLevelComments = comments.filter(
		comment => comment.parentId === null
	);

	const renderedComments = topLevelComments.map(comment => {
		return (
			<CommentShow key={comment.id} commentId={comment.id} postId={postId} />
		);
	});

	return (
		<div className='space-y-3'>
			<h1 className='text-lg font-bold'>All {comments.length} comments</h1>
			{renderedComments}
		</div>
	);
}
