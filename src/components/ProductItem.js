import React, { useState, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/cartContext';

const ProductItem = ({ product }) => {
  const { addToCart, updateQuantity, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(1);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product._id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product._id, newQuantity);
    } else {
      setQuantity(0);
      updateQuantity(product._id, 0);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rs. {product.price}</Text>
      {product.isAvailable ? (
        quantity === 0 ? (
          <Button title="Add to Cart" onPress={handleAddToCart} />
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <Text style={styles.backSoon}>Back Soon</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  backSoon: {
    color: 'red',
    marginTop: 10,
  },
});

export default ProductItem;
