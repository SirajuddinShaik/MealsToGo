/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadUser = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setUser(JSON.parse(value));
        console.log(user);
      }
    } catch (e) {
      console.log("error loading", e);
    }
    setIsLoading(false);
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user);
        saveUser(u.user);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        const err = e.toString().split(":");
        setError(err[err.length - 1]);
      });
    saveUser(user);
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Error : Passwords Don't Match");
    } else {
      registerRequest(email, password)
        .then((u) => {
          setUser(u.user);
          saveUser(u.user);
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
    setUser(null);
    saveUser(null);
    logoutRequest();
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (u) => {
      if (u !== null && u !== undefined) {
        setUser(u);
      }
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
        loadUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
