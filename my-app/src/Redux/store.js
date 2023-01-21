import { legacy_createStore, combineReducers, compose } from 'redux'

import { loggerReducer } from './redux'

const rootReducer = combineReducers({
    logger: loggerReducer
})

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composer())