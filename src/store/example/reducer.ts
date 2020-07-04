export enum Types {
	MESSAGE = 'PRINT_MESSAGE'
}

export type ExampleType = {
	message: string;
}

export type InitialStateExampleType = {
	message: string;	
}

export const InitialStateExample: InitialStateExampleType = {
	message: 'MENSAGEM DO REDUCER'
}

export type ExampleAction = | { type: Types.MESSAGE, payload: {message: string} }

export const ActionsE = {
	[Types.MESSAGE]: (action:ExampleAction) => {
		return {example: {message: action.payload.message}}
	}
}