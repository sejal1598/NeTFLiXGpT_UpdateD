import React, { useRef } from 'react'
import lang from '../utils/languageConsant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { options } from '../utils/constant'
import addgptMovieResult from "../utils/gptSlice"
const GptSearchBar = () => {

    const searchText = useRef(null)
    const dispatch = useDispatch()

    const searchMovieTmdb = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
        const json = await data.json()
        console.log("jsonjsonjsonjson", json);

        return json.result



    }

    const handleSearchText = async () => {
        console.log("oooooo", searchText.current.value);

        const query =
            `Act as a Movie Recommender System and suggest some movies for the query: "${searchText.current.value}". ` +
            `Only return the names of 5 movies, comma-separated. Example: "Gadar","Don","Golmaal","Koi Mil Gaya","Sholay"`

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });


        const getMovies = gptResult?.choices?.[0]?.message?.content.split(",")

        const dataArray = getMovies?.map(movie => searchMovieTmdb(movie))

        const tmdbResult = await Promise.all(dataArray)
        console.log(tmdbResult, "resultttttt");

        dispatch(addgptMovieResult({ movieNames: getMovies, movieResults: tmdbResult }))



    }


    const languageSelector = useSelector(store => store.language.lang)
    return (
        <div className=' pt-[30%] md:pt-[10%] flex justify-center'>

            <form onSubmit={(e) => e.preventDefault()} className='bg-black w-full md:w-1/2 grid grid-cols-12 '>
                <input ref={searchText} className='col-span-9  p-4 m-4 ' type='text' placeholder={lang[languageSelector].gptPlaceHolder} />
                <button onClick={handleSearchText} className=' col-span-3 m-4  py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[languageSelector].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
