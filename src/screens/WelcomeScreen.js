import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/images/shopping.png')} // Replace with your image path
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {/* Content Section */}
          <View style={styles.content}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
              Experience the convenience of fresh, high-quality groceries
              delivered straight to your doorstep, making your shopping
              effortless and your meals delicious.
            </Text>

            {/* Google Login Button */}
            <TouchableOpacity style={styles.googleButton}>
              <View style={styles.googleButtonContent}>
                <Image
                  source={require('../assets/icons/google.png')} // Replace with your Google icon path
                  style={styles.googleIcon}
                />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity
                style={styles.createAccountButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.createAccountText}>Create an account</Text>
                </TouchableOpacity>

            {/* Login Section */}
            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text
                style={styles.loginLink}
                onPress={() => navigation.navigate('Login')}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#606060',
    textAlign: 'center',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  createAccountButton: {
    backgroundColor: '#34C759',
    borderRadius: 5,
    paddingVertical: 12,
    marginBottom: 15,
  },
  createAccountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#606060',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#34C759',
  },
});

export default WelcomeScreen;
