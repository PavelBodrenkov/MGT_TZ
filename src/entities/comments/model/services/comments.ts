import {createAsyncThunk} from "@reduxjs/toolkit";

const getComments = createAsyncThunk(
    'comments/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3000/JSON/data.json')
            const tmpData = await response.json()

            let countRu = Object.keys(tmpData['ru']).length
            let countEn = Object.keys(tmpData['en']).length

            return {
                comments:tmpData,
                countRu,
                countEn
            }
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: 'Ошибка получения комментариев'
            })
        }
    }
)

export {
    getComments
}