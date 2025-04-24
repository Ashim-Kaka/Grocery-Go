import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  return (
    <Swiper
      loop={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={styles.paginationStyle} // Adjust pagination position
    >
      {/* Slide 1 - Background image + Text at top */}
      <View style={styles.slide}>
        <ImageBackground
          source={require('../assets/images/slider1.png')} // Your background image
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Welcome to</Text>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')} // Your logo
            />
            <Text style={styles.subtitle}>Shop fresh. Live well.</Text>
          </View>
        </ImageBackground>
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.replace('Welcome')} // Redirect to WelcomeScreen
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 2 - Content with blended background */}
      <View style={styles.slide}>
        <ImageBackground
          source={require('../assets/images/slider2.png')} // Your second slide background
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Fresh Deliveries</Text>
            <Text style={styles.subtitle}>
              Get groceries delivered at your doorstep.
            </Text>
          </View>
        </ImageBackground>
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.replace('Welcome')} // Redirect to WelcomeScreen
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 3 - Content with blended background */}
      <View style={styles.slide}>
        <ImageBackground
          source={require('../assets/images/slider3.png')} // Your third slide background
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
        </ImageBackground>
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.replace('Welcome')} // Redirect to WelcomeScreen
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    position: 'relative', // Ensure that button and dots are positioned relative to each slide
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    resizeMode: 'cover', // Ensures the background image covers the entire area
    opacity: 1.0, // Optionally adjust opacity for a subtle blending effect
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start', // Keep the text at the top
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 50, // Add some margin to avoid text colliding with the top
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    marginBottom: 20, // Spacing between logo and the motto
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold', // Bold for the heading text
    color: '#000', // Black color for text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal', // Normal weight for subheading text
    color: '#000', // Black color for text
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  getStartedButton: {
    backgroundColor: '#4CAF50', // Green color for the button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
    width: '80%', // Button width
    alignItems: 'center', // Center the text inside the button
    position: 'absolute',
    bottom: 80, // Positions the button a bit higher from the bottom to avoid collision
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  dot: {
    backgroundColor: '#CFCFCF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    zIndex: 10, // Ensure the dots appear above the button
  },
  activeDot: {
    backgroundColor: '#4CAF50',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    zIndex: 10, // Ensure the active dot stays above the button
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 50, // Positioning dots just above the "Get Started" button
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensure pagination dots stay above the button
  },
});

export default SplashScreen;
