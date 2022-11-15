import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authUserReducer } from "./auth-user-reducer";
import { loginReducer } from "./login-reducer";
import { navReducer } from "./nav-reducer";
import { profileReducer } from "./profile-reducer";
import { registerReducer } from "./register-reducer";
import { usersReducer } from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    nav: navReducer,
    registerPage: registerReducer,
    loginPage: loginReducer,
    usersPage: usersReducer,
    authUserReducer: authUserReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunk))

export {store}