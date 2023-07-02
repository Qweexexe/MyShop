import {combineReducers, createStore, Reducer} from "redux";
import saveReducer from "../reducers/SaveReducer";

export const RootReducer  = combineReducers({
    save : saveReducer,
})


export const store = createStore(RootReducer)