import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { IGithubState } from './github/types'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export interface AppState {
  github: IGithubState
}

const sagaMiddleware = createSagaMiddleware()

export const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
