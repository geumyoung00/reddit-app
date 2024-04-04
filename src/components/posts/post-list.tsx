import type { Post, User, Topic } from '@prisma/client';
import Link from 'next/link';
import { paths } from '@/paths';
import { fetchPostBySlug } from '@/db/queries/posts';

// TODO: 어떻게든 이 구성 요소에 posts 목록을 가져옵니다.
export default async function PostList({ slug }: { slug: string }) {
	const posts = await fetchPostBySlug(slug);
	console.log(posts);
	const renderedPosts = posts.map(post => {
		const topicSlug = post.topic.slug;
		if (!topicSlug) {
			throw new Error('Need a slug to link to a post');
		}

		return (
			<div key={post.id} className='border rounded p-2'>
				<Link href={paths.postView(topicSlug, post.id)}>
					<h3 className='text-lg font-bold'>{post.title}</h3>
					<div className='flex flex-row gap-8'>
						<p className='text-xs text-gray-400'>By {post.user.name}</p>
						<p className='text-xs text-gray-400'>
							{post._count.comments} comments
						</p>
					</div>
				</Link>
			</div>
		);
	});

	return <div className='space-y-2'>{renderedPosts}</div>;
}
