
import { useEffect } from "react"
import { addTopRatedMovies, addUpcomingMovies } from "../utils/MovieSlice"
import { useDispatch } from "react-redux"
import { options } from "../utils/constant"

const useUpComingMovies = () => {
    const dispatch = useDispatch()
    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)

        const json = await data.json()
        console.log("jsonjson0", json);

        dispatch(addUpcomingMovies(json?.results))



    }

    useEffect(() => {
        getUpComingMovies()
    }, [])
}

export default useUpComingMovies