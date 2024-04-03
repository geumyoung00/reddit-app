export const paths = {
	home() {
		return '/';
	},
	topicView(slug: string) {
		return `/topics/${slug}`;
	},
	postView(slug: string, postId: string) {
		return `/topics/${slug}/posts/${postId}`;
	},
	new() {
		`/new`;
	},
};
