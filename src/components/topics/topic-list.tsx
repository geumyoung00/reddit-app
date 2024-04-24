import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import { paths } from '@/paths';

export default async function TopicList() {
	// const topics = // db에서 토픽 목록을 가져와주세요
	const topics = await db.topic.findMany({ where: {} });

	// const renderedTopics = // .map() 메소드를 써서, 토픽 목록 내에 토픽 제목들을 표출. 제목을 누르면 해당 토픽으로 이동

	const renderedTopics = topics.map(topic => {
		return (
			<div key={topic.id}>
				<Link href={paths.topicView(topic.slug)}>
					<Chip color='warning' variant='shadow'>
						{topic.slug}
					</Chip>
				</Link>
			</div>
		);
	});

	return <div className='flex flex-row gap-3 flex-wrap'>{renderedTopics}</div>;
}
