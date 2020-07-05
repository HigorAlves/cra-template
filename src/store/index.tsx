import React, { createContext, useReducer, useContext } from 'react';

import { INITIAL_STATE, reducer, ContextType } from './reducer';

const StoreContext = createContext<ContextType>({ state: INITIAL_STATE, dispatch: () => null });

type Props = {
	children: React.ReactChild;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = (): ContextType => {
	const { state, dispatch } = useContext(StoreContext);

	return { state, dispatch };
};
