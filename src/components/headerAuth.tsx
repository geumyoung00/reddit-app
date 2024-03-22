'use client';
import {
	NavbarItem,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
	Avatar,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
	const { data: session } = useSession();

	return (
		<>
			{session?.user ? (
				<Popover placement='left'>
					<PopoverTrigger>
						<Avatar src={session.user.image || ''} />
					</PopoverTrigger>
					<PopoverContent>
						<div className='p-4'>
							<form action={actions.signOut}>
								<Button type='submit'>로그아웃</Button>
							</form>
						</div>
					</PopoverContent>
				</Popover>
			) : (
				<>
					<NavbarItem>
						<form action={actions.signIn}>
							<Button type='submit' color='secondary' variant='bordered'>
								로그인
							</Button>
						</form>
					</NavbarItem>
					<NavbarItem>
						<form action={actions.signIn}>
							<Button type='submit' color='primary' variant='flat'>
								회원가입
							</Button>
						</form>
					</NavbarItem>
				</>
			)}
		</>
	);
}
