'use client';

import { useSession } from 'next-auth/react';

export function Profile() {
	const { data: session } = useSession();

	return (
		<div>
			client-side :
			{session
				? ` ${session.user?.email}로 접속되었습니다.`
				: '권한이 없습니다.'}
		</div>
	);
}
