import * as actions from '@/actions';
import { auth } from '@/auth';
import { Profile } from '@/components/profile';

export default async function Home() {
	const session = await auth();

	return (
		<div>
			<form action={actions.signIn}>
				<button>Sign In</button>
			</form>
			<form action={actions.signOut}>
				<button>Sign Out</button>
			</form>
			<p>
				server-side :
				{session
					? ` ${session.user?.name}님 반갑습니다.`
					: '로그인이 필요합니다.'}
			</p>
			<Profile />
		</div>
	);
}
