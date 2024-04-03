'use client';
import { useParams } from 'next/navigation';

export default async function PostDetail() {
	const params = useParams();
	console.log(params);
	const { postId } = params;
	console.log(postId);

	return <div>{`제목 : ${postId}`}</div>;
}
