import React from "react"
import { ExampleInitialState } from "./example";
import { ExampleAction, ExampleType, ActionsE } from './example/reducer'


type State = {
	example: ExampleType
}

type Actions = | ExampleAction

export type ContextType = {
	 state: State;
	 dispatch: React.Dispatch<Actions>
 }

export const INITIAL_STATE: State = {
  example: ExampleInitialState
}

const Actions = {
  ...ActionsE
}

export const reducer: React.Reducer<any, Actions> = ( state: State, action: Actions) => {
	const newState = Actions[action.type](action)
	return { ...state, ...newState }
}