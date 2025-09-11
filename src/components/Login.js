import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {


    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const dispatch = useDispatch()

    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)


    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    const handleValidation = () => {
        const message = checkValidation(
            email.current.value,
            password.current.value
        )
        setErrorMessage(message)

        if (message) return

        if (!isSignInForm) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://photos.google.com/photo/AF1QipPtRwERKtgLXobiJZW9X6Qohc99GZP66iMA7UZP"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth?.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }));

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }
        else {
            //signin logic

            signInWithEmailAndPassword(auth, email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

                <p className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</p>

                {!isSignInForm &&
                    < input type='text' ref={name} placeholder='name' className=' p-4 my-4 w-full bg-gray-700' />
                }
                <input type='text'
                    //  value={email} onChange={(e) => setEmail(e.target.value)}
                    ref={email}
                    placeholder='email-address' className='p-4 my-4 w-full bg-gray-700' />


                <input type='password'
                    // alue={password} onChange={(e) => setPassword(e.target.value)}
                    ref={password}
                    placeholder='passward-enter' className='p-4 my-4 w-full bg-gray-700' />
                <p className="text-red-500 font-bold">{errorMessage}</p>

                <button onClick={handleValidation} className='p-4 my-4  w-full bg-red-700 rounded-lg'>{isSignInForm ? "Sign In" : "sign Up"}</button>
                <p onClick={toggleSignUpForm} className='py-4 cursor-pointer'>
                    {
                        isSignInForm ? "New to Netflfix ?Sign up Now" : "Already Registered?Sign in nOw"
                    }
                </p>
            </form>

        </div>
    )
}

export default Login
