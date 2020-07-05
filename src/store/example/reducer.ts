import changeText from './actions';
import { Types, StateType } from './types';

export const InitialState: StateType = {
	message: 'Click to change this message with redux',
};

export const Actions = {
	[Types.MESSAGE]: changeText,
};
