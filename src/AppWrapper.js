import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppWrapper from './src/AppWrapper';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <AuthProvider>
      <AppWrapper>
        <StackNavigator />
      </AppWrapper>
    </AuthProvider>
  );
};

export default App;
