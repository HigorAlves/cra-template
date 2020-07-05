// eslint-disable-next-line
type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum Types {
	MESSAGE = 'CHANGE_MESSAGE',
}

export type StateType = {
	message: string;
};

type PayloadType = {
	[Types.MESSAGE]: {
		message: string;
	};
};

export type ActionType = ActionMap<PayloadType>[keyof ActionMap<PayloadType>];
