import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movie = useSelector(store => store.movie)
    console.log("moviemoviemovie", movie);

    return (
        <div className=' bg-black'>
            < div className='-mt-52  pl-12 relative z-20'>
                < MovieList title={"Now Playing"} movie={movie?.nowPlayingMovie} />
                <MovieList title={"Trending"} movie={movie?.TopRatedMovies} />
                <MovieList title={"Popular"} movie={movie?.popularVideos} />

                {/* <MovieList title={"Horror"} movie={movie?.nowPlayingMovie} /> */}
                <MovieList title={"UpComing Movies"} movie={movie?.UpCommingMovies} />

            </div >

        </div >
    )
}

export default SecondaryContainer
