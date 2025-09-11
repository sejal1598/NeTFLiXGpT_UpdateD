import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
    name: "language",
    initialState: {
        lang: "en",
    },
    reducers: {
        ChangelanuageSelector: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { ChangelanuageSelector } = language.actions

export default language.reducer