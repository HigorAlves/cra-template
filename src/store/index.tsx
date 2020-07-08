import React, { createContext, useReducer, useContext } from 'react';

import { Reducer, initialState, ContextType } from './store';

const StoreContext = createContext<ContextType>({} as ContextType);

type Props = {
	children: React.ReactChild;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = (): ContextType => {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};
