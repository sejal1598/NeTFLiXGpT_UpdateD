import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./languageSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        language: languageReducer

    }
})

export default appStore