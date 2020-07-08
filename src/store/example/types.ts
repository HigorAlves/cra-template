type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum Types {
	CHANGE_TEXT = 'CHANGE_TEXT',
}

export type StateType = {
	message: string;
};

type PayloadType = {
	[Types.CHANGE_TEXT]: {
		message: string;
	};
};

export type ActionType = ActionMap<PayloadType>[keyof ActionMap<PayloadType>];
