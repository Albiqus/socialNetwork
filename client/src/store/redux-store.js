import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { profileReducer } from "./profile-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunk))

export {store}