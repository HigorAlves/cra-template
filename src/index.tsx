import React from 'react';
import ReactDOM from 'react-dom';

import 'Assets/css/reset.css';
import 'Assets/css/index.css';
import 'Assets/css/errorBoundary.css';
import 'Assets/css/glitchEffect.css';
import 'Assets/css/astronault.css';

import { ErrorBoundary } from 'HOCs/errorBoundary';
import ErrorBoundaryPage from 'Pages/errorBoundary';
import App from 'Pages/home';

import { StoreProvider } from 'store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary fallbackRender={ErrorBoundaryPage}>
			<StoreProvider>
				<App />
			</StoreProvider>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
