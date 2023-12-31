'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {auth} from "@/store/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { googleProvider } from '@/store/firebase';
const signUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const submit =  async () =>{
      try{
        await createUserWithEmailAndPassword(auth,email,password);
        console.log(auth,"user");
      }catch(err){
        console.error(err);
      }
    }
    const signInWithGoogle = async () => {
      try {
        signInWithPopup(auth, googleProvider);
      } catch (err) {
        console.error(err);
      }
    };

    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser: any) => {
        if (authUser) {
          setUser(authUser );
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, [auth]);

      console.log(user);

   return (<>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-96" >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button onClick={submit} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
          <button onClick={signInWithGoogle}>login whit google</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default signUp;
