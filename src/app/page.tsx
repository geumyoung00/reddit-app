import * as actions from '@/actions/action';

export default function Home() {
	return (
		<div>
			<form action={actions.signUp}>
				<button>Sign Up</button>
			</form>
			<form action={actions.singOut}>
				<button>Sign Out</button>
			</form>
		</div>
	);
}
