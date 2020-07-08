import { Types, ActionType } from './types';

function changeText(message: string): ActionType {
	return {
		type: Types.CHANGE_TEXT,
		payload: {
			message,
		},
	};
}

export default changeText;
