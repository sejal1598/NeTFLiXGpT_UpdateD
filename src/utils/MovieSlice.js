import { createSlice } from "@reduxjs/toolkit"

const movie = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularVideos: null,
        TopRatedMovies: null,
        UpCommingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularVideos = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.UpCommingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movie.actions
export default movie.reducer