import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import {
  loginRequest,
  registerRequest,
  logoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user);
        // saveUser(u);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        const err = e.toString().split(":");
        setError(err[err.length - 1]);
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Error : Passwords Don't Match");
    } else {
      registerRequest(email, password)
        .then((u) => {
          setUser(u.user);
          setError(null);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          const err = e.toString().split(":");
          setError(err[err.length - 1]);
        });
    }
  };
  const onLogout = () => {
    logoutRequest();
    setUser(null);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (u) => {
      if (u !== null && u !== undefined) {
        setUser(u);
      }
      console.log(u);
    });
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
