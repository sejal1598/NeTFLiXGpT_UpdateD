import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptSearchPage = () => {

    const { movieNames, movieResults } = useSelector(store => store.gpt)

    if (!movieNames) return null

    return (
        <div className="p-4 m-4 bg-black  text-white opacity-90" >
            {movieNames?.map((movie, index) => <MovieList title={movie} movies={movieResults[index]} />)}

        </div>
    )
}

export default GptSearchPage
