/* eslint-disable */
import React from 'react';

type State = {
	error: null | any;
	errorInfo: null | any;
	hasError: boolean;
};

type Props = {
	onReset?: (arg?: any) => void;
	onError?: (error: any, info: string) => void;
	resetKeys?: any;
	onResetKeysChange?: (prevResetKeys: any, resetKeys: any ) => void;
	fallbackRender: React.ReactNode;
};

const initialState = { error: null, errorInfo: null, hasError: false };

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = initialState;
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		this.props.onError?.(error, errorInfo?.componentStack);
		this.setState({ error, errorInfo, hasError: true });
    console.log(error, errorInfo);
	}

	render() {
		const { error, errorInfo } = this.state;
		const { fallbackRender } = this.props;

		if (error !== null) {
			const props = { componentStack: errorInfo?.componentStack, error };

			if (typeof fallbackRender === 'function') {
				return fallbackRender(props);
			}

			throw new Error('react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop');
		}

		return this.props.children;
	}
}

function withErrorBoundary(Component: React.FC, errorBoundaryProps: Props) {
	function Wrapped(props: JSX.IntrinsicAttributes) {
		return (
			<ErrorBoundary {...errorBoundaryProps}>
				<Component {...props} />
			</ErrorBoundary>
		);
	}

	// Format for display in DevTools
	const name = Component.displayName || Component.name || 'Unknown';
	Wrapped.displayName = `withErrorBoundary(${name})`;

	return Wrapped;
}

export { ErrorBoundary, withErrorBoundary };
