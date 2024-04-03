import { Button } from '@nextui-org/react';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function FormButton({ children }: { children: string }) {
	const { pending } = useFormStatus();
	return (
		<Button type='submit' isLoading={pending}>
			{children}
		</Button>
	);
}
