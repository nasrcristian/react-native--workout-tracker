import React from 'react';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserLogin = () => useContext(UserContext);
