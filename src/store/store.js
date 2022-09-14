import { configureStore } from '@reduxjs/toolkit'
import { postReducer } from './post.reducer'
import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux'


const rootReducer = combineReducers({
    postModule: postReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
