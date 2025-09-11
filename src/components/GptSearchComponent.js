import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchPage from './GptSearchPage'

const GptSearchComponent = () => {
    return (

        <>

            <div className='absolute -z-10'>
                <img className=' object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg' />
            </div>
            <div className='pt-[30%] md:p-0'>
                <GptSearchBar />
                <GptSearchPage />


            </div>
        </>

    )
}

export default GptSearchComponent
