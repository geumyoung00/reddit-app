'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
	const { data } = useSession();

	return <p>{data ? `email : ${data.user?.email}` : '로그인이 필요합니다.'}</p>;
}
