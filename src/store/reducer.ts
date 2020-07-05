import { InitialState as InitialStateExample, Actions as ActionsExample } from './example/reducer';
import { StateType as StateTypeExample, ActionType as ActionTypeExample } from './example/types';

type State = {
	example: StateTypeExample;
};

type Actions = ActionTypeExample;

export type ContextType = {
	state: State;
	dispatch: React.Dispatch<Actions>;
};

export const INITIAL_STATE: State = {
	example: InitialStateExample,
};

const Actions = {
	...ActionsExample,
};

export const reducer: React.Reducer<State, Actions> = (state: State, action: Actions) => {
	const newState = Actions[action.type](action);
	return { ...state, ...newState };
};
