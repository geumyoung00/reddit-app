import { Post } from '@prisma/client';
import { count } from 'console';
import { db } from '..';

export type PostWithData = Post & {
	topic: { slug: string };
	user: { name: string | null };
	_count: { comments: number };
};

export async function fetchPostBySlug(slug: string): Promise<PostWithData[]> {
	return db.post.findMany({
		where: { topic: { slug } },
		include: {
			topic: { select: { slug: true } },
			user: { select: { name: true } },
			_count: { select: { comments: true } },
		},
	});
}

export async function fetchTopPosts() {
	return db.post.findMany({
		orderBy: { createdAt: 'desc' },
		include: {
			topic: { select: { slug: true } },
			user: { select: { name: true } },
			_count: { select: { comments: true } },
		},
		take: 5,
	});
}
