import { db } from '@/db';

export default async function PostDetail() {
	const post = await db.post.findFirst({ where: {} });
	return <div>{`제목 : ${post?.title}`}</div>;
}
