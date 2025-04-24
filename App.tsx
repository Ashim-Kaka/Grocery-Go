import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext, AuthProvider} from './src/context/authContext';
import { ProductProvider } from './src/context/ProductContext';
import { CartProvider } from './src/context/cartContext';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
