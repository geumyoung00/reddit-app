import PostList from '@/components/posts/post-list';
import { fetchPostsByTerm } from '@/db/queries/posts';
export default function SearchPage({
	searchParams,
}: {
	searchParams: { term: string };
}) {
	const { term } = searchParams;

	return (
		<div>
			<PostList fetchData={() => fetchPostsByTerm(term)} />
		</div>
	);
}
