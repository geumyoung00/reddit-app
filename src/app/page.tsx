import * as actions from '@/actions';

export default function Home() {
	return (
		<div>
			<form action={actions.signIn}>
				<button>Sign In</button>
			</form>
			<form action={actions.signOut}>
				<button>Sign Out</button>
			</form>
		</div>
	);
}
