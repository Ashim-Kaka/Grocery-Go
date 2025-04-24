import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartContext } from '../context/cartContext';
import Toast from 'react-native-toast-message';

const CartScreen = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  const handleCheckout = () => {
    Toast.show({
      type: 'success',
      text1: 'Purchase Successful',
      text2: 'Thank you for your purchase!',
    });

    // Additional logic for purchase checkout (e.g., clearing cart, updating orders, etc.)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Rs. {item.price} x {item.quantity}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item._id)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: Rs. {getTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
      {/* Toast Notification */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
  remove: {
    color: 'red',
    marginTop: 10,
  },
  totalContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
