import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user= useSelector((store)=>store.user);
  const navigate= useNavigate();
  const dispatch= useDispatch();

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL:photoURL}));
        navigate("/browser");
        
    } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
       
    }
    });

    return ()=> unsubscribe();

    },[]);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
      
        }).catch((error) => {
        // An error happened.
        navigate("/error");
        });
    }

  return (
    <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44" src={LOGO} alt='netflix logo'/>
        {user &&(<div>
          <img className='w-12 h-12' src={user.photoURL} alt='usericon' />
            <button className="font-bold text-white" onClick={handleSignOut}>Sign out</button>
        </div>)}
    </div>
  )
}

export default Header
