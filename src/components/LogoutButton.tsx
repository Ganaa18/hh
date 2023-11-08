import React from 'react';
import {auth} from '@/store/firebase'
import {signOut} from "firebase/auth"
import { useUser } from '@/context/UserContext';import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const user = useUser();
  const router = useRouter();
  console.log(user?.user?.displayName);
  const logOut = async () =>{
    try{
      await signOut(auth);
      router.push("/");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <button onClick={logOut} className='flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium  hover:text-red-500 md:flex-none md:justify-start md:p-2 md:px-3'>
      Logout
    </button>
  );
};

export default LogoutButton;
