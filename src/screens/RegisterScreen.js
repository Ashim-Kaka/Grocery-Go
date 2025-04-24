import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const { setToken } = useContext(AuthContext);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:5000/api/auth/register', {
        name,
        email,
        password,
        mobileNumber
      });

      if (response.status === 201) {
        setToken(response.data.token);
        navigation.replace('Login');
      } else {
        Alert.alert('Registration Error', response.data.message || 'An error occurred during registration. Please try again.');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      if (error.response) {
        Alert.alert('Registration Error', error.response.data.message || 'An error occurred during registration. Please try again.');
      } else if (error.request) {
        Alert.alert('Registration Error', 'No response received. Please check your network connection.');
      } else {
        Alert.alert('Registration Error', error.message || 'An error occurred during registration. Please try again.');
      }
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/register-background.png')} // Ensure you have this image in your assets folder
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Create account</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Button title="Signup" onPress={handleRegister} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? <Text style={styles.boldText}>Login</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make the content stand out
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff', // Ensure inputs are visible against the background
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
