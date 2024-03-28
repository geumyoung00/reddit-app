export const path = {
	home() {
		return '/';
	},
	topicView(topicName: string) {
		return `/topics/${topicName}`;
	},
	postView(topicName: string, postId: string) {
		return `/topics/${topicName}/posts/${postId}`;
	},
	new() {
		`/new`;
	},
};
