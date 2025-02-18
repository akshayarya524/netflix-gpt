import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm]= useState(true);
    const [errormessage, setErrormessage]= useState(null);
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const name= useRef(null);
    const email= useRef(null);
    const password= useRef(null);


    const handleButtonClick=()=>{

       const message= checkValidation(email.current.value, password.current.value);
       setErrormessage(message)
        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocLWDzUGoP0AYrMrFbALzp6kOj7QwBjQd7KBgUj5s6DqRcFX09U=s432-c-no"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));
                    navigate("/browser");
                    
                  }).catch((error) => {
                    // An error occurred
                    setErrormessage(error.message);
                
                  });
                
               
                
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormessage(errorCode+"-"+errorMessage);
                
            });

        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browser");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormessage(errorCode+"-"+errorMessage);
            });
        }
    }

    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);

    }

   

  return (
  
    <div>
    <Header/>
    
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" alt='netflix logo'/>
    </div>

    <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4" >{isSignInForm ? "Sign in" : "Sign up"}</h1>
       {!isSignInForm && (<input ref={name} type='text' placeholder="Full Name" className="p-4 my-4  w-full bg-gray-700"/>)}
        <input ref={email}type='text' placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input ref={password} type='password' placeholder="Password" className="p-4 my-4  w-full bg-gray-700"/>
        <p className='text-red-500'>{errormessage}</p>
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login
