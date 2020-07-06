import React from 'react';

import logo from 'assets/images/logo.svg';

type Props = {
	error: {
		message: string;
	};
};

function App({ error }: Props): React.ReactElement {
	return (
		<div className='App'>
			<header className='App-error-boundry'>
				<img src={logo} className='App-logo' alt='logo' />
				<span className='glitch-wrapper'>
					<h1 className='glitch-error' data-text='ERROR'>
						ERROR
					</h1>
				</span>
				<p>
					<code>{error.message}</code>
				</p>
			</header>
		</div>
	);
}

export default App;
