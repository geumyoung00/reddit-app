import PostList from '@/components/posts/post-list';
import { fetchPostBySlug } from '@/db/queries/posts';
import PostCreateForm from './posts/post-create-form';

export default async function TopicsName({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const fetchData = await fetchPostBySlug(slug);

	return (
		<div className='grid grid-cols-4 gap-4 p-4'>
			<div className='col-span-3'>
				<h1 className='text-2xl font-bold mb-2'>{slug}</h1>
				<PostList fetchData={fetchData} />
			</div>
			<PostCreateForm slug={slug} />
		</div>
	);
}
