import React, { useEffect } from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'
import { toggleGpTSeArChMovie } from '../utils/gptSlice';
import { ChangelanuageSelector } from '../utils/languageSlice';

const Header = () => {
    const user = useSelector(store => store.user)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            navigate("/error")
        })
    }


    const handleGptSearchClick = () => {
        //toggle search
        dispatch(toggleGpTSeArChMovie())
    }


    const handleLanguage = (e) => {
        console.log("pppppp", e.target.value);

        dispatch(ChangelanuageSelector(e.target.value))
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;


                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
        //this will be call when component unmoun
        return (() => {
            unsubscribe()
        })
    }, [])
    return (
        <div className='absolute w-screen z-10 logo-class px-8 py-2 bg-gradient-to-b from-black flex justify-between flex-col md:flex-row  md:justify-between bg-black sm:bg-blue-900 md:bg-green-900'>

            <img className='w-40 mx-auto md:mx-0' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

            {user && <div className='flex p-2'>
                <div onClick={handleGptSearchClick} className=' bg-purple-800 text-white py-2 px-4 mx-4 my-2 rounded-lg cursor-pointer'>{showGptSearch ? "HomePage" : "GPT Search"}</div>
                {showGptSearch && <div >
                    <select className='p-2  bg-gray-900 text-white m-2' onClick={handleLanguage}>
                        <option value={"en"}>English</option>
                        <option value={"hindi"}>Hindi</option>
                        <option value={"spanish"}>Spanish</option>
                    </select>
                </div>}
                <img className='w-12 h-12' alt='user-icon' src={user?.photoURL || "https://i.pravatar.cc/150?u=default"} />
                <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
            </div>}


        </div>
    )
}

export default Header
