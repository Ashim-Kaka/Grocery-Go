import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../context/authContext';

const SomeComponent = () => {
  const { token, logout } = useContext(AuthContext);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        console.log('Decoded Token:', decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      {decodedToken ? (
        <Text style={styles.info}>Decoded Token: {JSON.stringify(decodedToken)}</Text>
      ) : (
        <Text style={styles.info}>No user logged in</Text>
      )}
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333'
  },
  info: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666'
  }
});

export default SomeComponent;
