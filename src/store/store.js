import { postReducer } from './post.reducer'
import  {userReducer}  from './user.reducer'
import  {profileReducer}  from './profile.reducer'
import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux'


const rootReducer = combineReducers({
    postModule: postReducer,
    userModule: userReducer,
    profileModule: profileReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
