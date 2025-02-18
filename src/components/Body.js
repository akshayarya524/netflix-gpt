import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
const dispatch= useDispatch();


    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));
        
    } else {
        // User is signed out
        dispatch(removeUser());
       
    }
});

    },[]);

    
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browser" element={<Browse />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default Body
