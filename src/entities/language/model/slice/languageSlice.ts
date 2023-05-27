import {createSlice} from "@reduxjs/toolkit";

export enum languageType {
    EN = 'en',
    RU = 'ru'
}

const initialState: {language:languageType} = {
    language: languageType.RU,
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage:(state, action:{payload:languageType}) => {
            state.language = action.payload
        }
    }
})

export const {actions: languageActions} = languageSlice
export const {reducer: languageReducer} = languageSlice