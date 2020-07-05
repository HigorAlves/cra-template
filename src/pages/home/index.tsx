import React from 'react';

import logo from 'assets/images/logo.svg';

import { useStore } from 'store';
import { Types } from 'store/example/types';

function App(): React.ReactElement {
	const { state, dispatch } = useStore();

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit
					<code> src/pages/home/index.tsx </code>
					and save to reload.
				</p>
				<button type='button' onClick={() => dispatch({ type: Types.MESSAGE, payload: { message: '👨🏻‍💻 All seems to work! ✅' } })}>
					{state.example.message}
				</button>
			</header>
		</div>
	);
}

export default App;
