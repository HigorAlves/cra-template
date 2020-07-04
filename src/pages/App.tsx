import React from 'react';

import logo from 'assets/images/logo.svg';

import { useStore } from 'store';
import { Types } from 'store/example/reducer';

function App() {
	const { state, dispatch } = useStore();

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit
					<code>src/App.tsx</code>
					and save to reload.
				</p>
				<a
					onClick={() => dispatch({ type: Types.MESSAGE, payload: { message: 'teste' } })}
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<h1>{state.example.message}</h1>
			</header>
		</div>
	);
}

export default App;
