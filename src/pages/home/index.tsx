import React from 'react';

import logo from 'assets/images/logo.svg';

import { useStore } from 'store';
import Actiont from 'store/example/actions';

function App(): React.ReactElement {
	const { state, dispatch } = useStore();

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<span className='glitch-wrapper'>
					<h1 className='glitch' data-text='@higoralves/cra-template'>
						@higoralves/cra-template
					</h1>
				</span>
				<p>
					Edit
					<code> src/pages/home/index.tsx </code>
					and save to reload.
				</p>
				<button className='button' type='button' onClick={() => dispatch(Actiont('👨🏻‍💻 All seems to work! ✅'))}>
					{state.example.message}
				</button>
				<a href='https://github.com/higoralves/cra-template' target='blank'>
					Access Github Repo
				</a>
			</header>
		</div>
	);
}

export default App;
