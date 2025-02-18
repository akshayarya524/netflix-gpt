import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user= useSelector((store)=>store.user);
const navigate= useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        }).catch((error) => {
        // An error happened.
        navigate("/error");
        });
    }

  return (
    <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='netflix logo'/>
        {user &&(<div>
          <img className='w-12 h-12' src={user.photoURL} alt='usericon' />
            <button className="font-bold text-white" onClick={handleSignOut}>Sign out</button>
        </div>)}
    </div>
  )
}

export default Header
