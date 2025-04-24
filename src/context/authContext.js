import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);
  const [user, setUserState] = useState(null);

  const setToken = async (newToken, userInfo) => {
    console.log('setToken called with:', { newToken, userInfo }); // Log inputs
    try {
      setTokenState(newToken);
      setUserState(userInfo);
  
      if (newToken) {
        await AsyncStorage.setItem('authToken', newToken);
        if (userInfo) {
          await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
          console.warn('No userInfo provided; skipping AsyncStorage setItem for userInfo');
        }
      } else {
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('userInfo');
      }
    } catch (error) {
      console.error('Error setting token:', error);
    }
  };

  const logout = async () => { // Logic for user logout 
    setUser(null); await AsyncStorage.removeItem('user'); 
  };

  return (
    <AuthContext.Provider value={{ token, user, logout, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
