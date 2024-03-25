import Link from 'next/link';
import HeaderAuth from './headerAuth';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
} from '@nextui-org/react';

export default async function Header() {
	const contentAuth = <HeaderAuth />;
	return (
		<Navbar className='shadow mb-6'>
			<NavbarBrand>
				<Link href='/' className='font-bold'>
					Discuss
				</Link>
			</NavbarBrand>
			<NavbarContent justify='center'>
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>{contentAuth}</NavbarContent>
		</Navbar>
	);
}
