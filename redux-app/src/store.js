import { combineReducers, createStore } from "redux"
import counterReducer from "./reducers"

const store = createStore(combineReducers({
    counterReducer: counterReducer
}))

export default store 