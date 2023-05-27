import {commentsReducer} from "entities/comments";
import {combineReducers} from "@reduxjs/toolkit";
import {languageReducer} from "entities/language";


export default combineReducers({
    comments:commentsReducer,
    language: languageReducer
});