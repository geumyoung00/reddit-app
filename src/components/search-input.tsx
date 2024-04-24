'use client';

import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

export default function SearchInput() {
	const params = useSearchParams();
	const term = params.get('term') || '';

	return (
		<form action={actions.search}>
			<Input defaultValue={term} name='term' />
		</form>
	);
}
