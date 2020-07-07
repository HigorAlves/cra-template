import { InitialState as InitialStateExample, Actions as ActionsExample } from './example/reducer';
import { StateType as StateTypeExample, ActionType as ActionTypeExample } from './example/types';

export type StateType = {
	example: StateTypeExample;
};

export type ActionsType = ActionTypeExample;

export type ContextType = {
	state: StateType;
	dispatch: React.Dispatch<ActionsType>;
};

export const INITIAL_STATE: StateType = {
	example: InitialStateExample,
};

const Actions = {
	...ActionsExample,
};

export const reducer: React.Reducer<StateType, ActionsType> = (state: StateType, action: ActionsType) => {
	const newState = Actions[action.type](action);
	return { ...state, ...newState };
};
