import { ActionType } from './types';

const changeText = (action: ActionType): { example: { message: string } } => ({ example: { message: action.payload.message } });

export default changeText;
