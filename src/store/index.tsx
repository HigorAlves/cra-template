import React, { createContext, useReducer, useContext } from "react"
import {INITIAL_STATE,reducer, ContextType} from './reducer'

const StoreContext = createContext<ContextType>({state: INITIAL_STATE, dispatch: () => null});

export const StoreProvider = ({ children } : {children: React.ReactChild}) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
	
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
	const { state, dispatch } = useContext(StoreContext)
  return { state, dispatch }
}