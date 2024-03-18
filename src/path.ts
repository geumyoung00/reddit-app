export const path = {
	home() {
		return '/';
	},
	topics(topicName: string) {
		return `/topics/${topicName}`;
	},
	post(topicName: string, postId: string) {
		return `/topics/${topicName}/posts/${postId}`;
	},
	new() {
		`/new`;
	},
};
