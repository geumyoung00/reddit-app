import PostList from '@/components/posts/post-list';
import TopicList from '@/components/topics/topic-list';
import TopicCreateForm from '@/components/topics/topicCreateForm';
import { fetchTopPosts } from '@/db/queries/posts';

export default async function Home() {
	return (
		<div className='grid grid-cols-4 gap-4 p-4'>
			<div className='col-span-3'>
				<h1 className='text-xl m-2'>Top Posts</h1>
				<PostList fetchData={fetchTopPosts} />
			</div>
			<div>
				<TopicCreateForm />
				<TopicList />
			</div>
		</div>
	);
}
