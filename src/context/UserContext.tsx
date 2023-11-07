'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from "../store/firebase";
import type { User } from 'firebase/auth';

type UserContextType = {
  user: User | null;
  googleSignIn: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children } : {children : React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
  const googleSignIn = () =>{
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth,Provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return ( 
    <UserContext.Provider value={{user,googleSignIn}}>
      {children}
    </UserContext.Provider>
  )
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
