import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/MovieSlice'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpcomingMovies'
import GptSearchComponent from './GptSearchComponent'

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopratedMovies()
    useUpComingMovies()

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    return (
        <div>
            <Header />

            {showGptSearch ? <GptSearchComponent /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>}


            {/* //main section- with video background and movie name */}


            {/* secondarry movie -collection*n
cards */}


        </div>
    )
}

export default Browse
