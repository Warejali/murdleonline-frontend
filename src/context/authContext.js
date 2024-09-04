import React, { useContext, useState, useEffect, createContext } from 'react';

import axios from 'axios';
import { makeReq, handleCatch } from '../utils/makeReq';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenLocal = window.localStorage.getItem('token');

  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const resData = await makeReq('/auth/refresh');
        setUser(resData.data.user);
        setIsLoggedIn(true);
      } catch (err) {
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  const saveUser = (user, token) => {
    window.localStorage.setItem('game-token', token);
    setTimeout(() => {
      setIsLoggedIn(true);
      setToken(token);
      setUser(user);
    }, 1000);
  };

  const logout = () => {
    window.localStorage.removeItem('game-token');
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{ token, isFetching, user, saveUser, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
