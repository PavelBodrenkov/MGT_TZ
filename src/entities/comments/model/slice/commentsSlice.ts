import {createSlice} from "@reduxjs/toolkit";
import {
    actionComments,
    commentsProps,
    initialStateComments
} from "entities/comments/model/types/commentsType";
import {getComments} from "entities/comments/model/services/comments";

const initialState: initialStateComments = {
    comments: {} as commentsProps,
    counts:{
        ru:0,
        en:0
    },
    isLoading: false,
    error:''
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getComments.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getComments.fulfilled, (state, action:{payload:actionComments}) => {
                state.isLoading = false
                state.error = ''
                state.comments = action.payload.comments
                state.counts.en = action.payload.countEn
                state.counts.ru = action.payload.countRu
            })
            .addCase(getComments.rejected, (state, action: any) => {
                state.isLoading = false
                state.error = action.payload.message
            })
    }
})

export const {actions: commentsActions} = commentsSlice
export const {reducer: commentsReducer} = commentsSlice