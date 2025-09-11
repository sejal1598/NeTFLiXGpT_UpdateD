
import { useEffect } from "react"
import { addTopRatedMovies } from "../utils/MovieSlice"
import { useDispatch } from "react-redux"
import { options } from "../utils/constant"

const useTopratedMovies = () => {
    const dispatch = useDispatch()
    const getTopratedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)

        const json = await data.json()
        console.log("jsonjson0", json);

        dispatch(addTopRatedMovies(json?.results))



    }

    useEffect(() => {
        getTopratedMovies()
    }, [])
}

export default useTopratedMovies