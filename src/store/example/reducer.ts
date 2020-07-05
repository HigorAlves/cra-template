import changeText from './actions';
import { Types, StateType } from './types';

export const InitialState: StateType = {
	message: '🧪 Click here to test global State! 🧪',
};

export const Actions = {
	[Types.MESSAGE]: changeText,
};
