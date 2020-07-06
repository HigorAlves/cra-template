import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/css/reset.css';

import { ErrorBoundary } from 'hocs/errorBoundary';

import ErrorBoundaryPage from 'pages/errorBoundary';
import App from 'pages/home';

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
