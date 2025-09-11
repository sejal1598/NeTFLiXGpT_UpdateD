import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCart = ({ posterPath }) => {

    if (!posterPath) return null
    return (
        <div className='w-48 pr-4'>
            <img className='' src={`${IMG_CDN_URL}${posterPath}`} alt="movie cart" />
            {/* <img src={`${IMG_CDN_URL} {posterPath}`} alt="movie cart" /> */}
        </div>
    )
}

export default MovieCart
