import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovie)

    const mainMovies = movies?.[0]

    if (!movies === null || !movies === undefined) return null



    if (!mainMovies) return null;
    const { original_title, overview, id } = mainMovies;





    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId={id} />
        </div>
    )
}

export default MainContainer
