import { combineReducers } from "redux";
import { routerReducer }      from 'react-router-redux'
import page from "./page";

export default combineReducers({
    router:routerReducer,
    page
    //,any reducers
});
