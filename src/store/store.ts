import { exampleReducer, InitialState as InitialStateExample } from './example/reducer';
import { StateType as StateTypeExample, ActionType as ActionTypesExample } from './example/types';

type StateType = {
	example: StateTypeExample;
};

type ActionTypes = ActionTypesExample;

export type ContextType = {
	state: StateType;
	dispatch: React.Dispatch<ActionTypes>;
};

export const initialState: StateType = {
	example: InitialStateExample,
};

export const Reducer: React.Reducer<StateType, ActionTypes> = (state: StateType, action: ActionTypes) => {
	return {
		example: exampleReducer(state.example, action),
	};
};
