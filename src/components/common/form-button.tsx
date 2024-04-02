import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export default function FormButton() {
	const { pending } = useFormStatus();
	return (
		<Button type='submit' isLoading={pending}>
			Submit
		</Button>
	);
}
