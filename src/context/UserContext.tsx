"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../store/firebase";
import type { User } from "firebase/auth";

type UserContextType = {
  user: User | null;
  signInWithGoogle: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  }

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
    <UserContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
