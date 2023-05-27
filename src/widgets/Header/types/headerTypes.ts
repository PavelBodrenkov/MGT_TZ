import {languageType} from "entities/language/model/slice/languageSlice";
import {AppDispatch} from "app/providers/StoreProvider";

export type itemLanguage = {
    id: number,
    title: string,
    selected: boolean,
    key: string
}

export interface State {
    language: itemLanguage[],
    title: string
    isOpenDropdown:boolean
}

export interface Props {
    languageActions: {
        setLanguage: (lang: languageType) => void
    },
    dispatch: AppDispatch
}