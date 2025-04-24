import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import api from '../utils/api'; // Import centralized API

const LoginScreen = ({ navigation }) => {
  const { setToken } = useContext(AuthContext); // Access AuthContext for token management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // For showing a loader during API call

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:5000/api/auth/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        console.log('Login response:', response.data); // Log the entire API response
        const { token, user } = response.data; // Extract token and user
        if (!token || !user) {
          console.error('Login response missing token or user info');
          return;
        }
        setToken(token, user); // Pass both token and user to setToken
        navigation.replace('Home');
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}

      <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  registerLink: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
