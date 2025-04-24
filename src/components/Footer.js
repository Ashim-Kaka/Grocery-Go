import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/icons/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image source={require('../assets/icons/cart.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/icons/account.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Footer;
