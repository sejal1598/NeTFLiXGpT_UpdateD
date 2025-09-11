import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/MovieSlice"
import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constant"

const useNowPlayingMovies = () => {
    const now_playing = useSelector(store => store.movie.nowPlayingMovie)

    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)

        const json = await data.json()
        dispatch(addNowPlayingMovies(json?.results))



    }

    useEffect(() => {
        if (!now_playing) {
            getNowPlayingMovies()
        }
    }, [])
}

export default useNowPlayingMovies