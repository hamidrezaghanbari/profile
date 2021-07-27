import { createSlice } from "@reduxjs/toolkit"


// ** initialState
const initialState = {
    lang: 'en'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,

    // ** reducers
    reducers: {
        changeLang: (state, { payload }) => {
            state.lang = payload
        }
    }
})


export const selectTheme = state => state.theme.lang


// ** export actions
export const { changeLang } = themeSlice.actions


// ** export reducer
export default themeSlice.reducer