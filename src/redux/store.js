import {createStore}  from "redux";
import wordReducer from "./reducer/wordReducer";


const store = createStore(wordReducer)

export default store