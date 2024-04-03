import CommentShow from '@/components/comments/comment-show';

interface CommentListProps {}

// TODO: 댓글 목록을 가져와주세요:
export default function CommentList({}: CommentListProps) {
	const topLevelComments = comments.filter(
		(comment) => comment.parentId === null
	);
	const renderedComments = topLevelComments.map((comment) => {
		return (
			<CommentShow
				key={comment.id}
				commentId={comment.id}
				comments={comments}
			/>
		);
	});

	return (
		<div className="space-y-3">
			<h1 className="text-lg font-bold">All {comments.length} comments</h1>
			{renderedComments}
		</div>
	);
}
