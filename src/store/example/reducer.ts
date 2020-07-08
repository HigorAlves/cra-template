import { StateType, ActionType, Types } from './types';

export const InitialState: StateType = {
	message: '🧪 Click here to test global State! 🧪',
};

export function exampleReducer(state = InitialState, action: ActionType): StateType {
	switch (action.type) {
		case Types.CHANGE_TEXT:
			return { ...state, message: action.payload.message };
		default:
			return state;
	}
}
