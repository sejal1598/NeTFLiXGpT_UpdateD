import React, { useEffect, useState } from 'react'
import MovieCart from './MovieCart'

const MovieList = ({ title, movie }) => {
    console.log("moviiiiiiiiiiiiiiiiiiiiiiiii", movie?.map(val => val?.poster_path));
    // let [movies, setMovies] = useState(null)
    // useEffect(() => {
    //     if (movie?.length > 0)
    //         setMovies(movie)
    // }, [movie])
    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>

            <div className='flex overflow-x-scroll'>


                <div className='flex'>
                    {movie?.length > 0 ? movie?.map(movie => <MovieCart posterPath={movie?.poster_path} />) : <p>Loading movies...</p>}

                    {/* {
                    movie?.length > 0 ? movie?.map(movie => {
                        < MovieCart key={movie?.id}  ={movie?.poster_path} />
                    }) : <p>Loading movies...</p>
                } */}
                </div>
            </div >
        </div>
    )
}

export default MovieList
