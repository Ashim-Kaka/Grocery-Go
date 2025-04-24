import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { AuthContext } from '../context/authContext';
import { ProductContext } from '../context/ProductContext';
import ProductItem from '../components/ProductItem';
import Footer from '../components/Footer';

const categories = [
  { id: '1', name: 'Vegetables', icon: '🌽' },
  { id: '2', name: 'Meat', icon: '🥩' },
  { id: '3', name: 'Fruits', icon: '🍎' },
];

const HomeScreen = () => {
  const { user } = useContext(AuthContext);
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('User in HomeScreen:', user); // Log user data in HomeScreen
    console.log('Products in HomeScreen:', products); // Log product data in HomeScreen
  }, [user, products]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning, {user?.name || 'Guest'} 👋</Text>
          <Text style={styles.userInfo}>{user?.location}</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories Section */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Products Section */}
        <Text style={styles.sectionTitle}>Products</Text>
        <View style={styles.productGrid}>
          {filteredProducts.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))}
        </View>

        {/* Invite Friends Section */}
        <View style={styles.inviteSection}>
          <Text>Invite friends and get Rs. 150 credit for every invite!</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 70, // To avoid content being hidden behind the footer
  },
  header: {
    padding: 16,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    color: 'gray',
  },
  searchBar: {
    marginTop: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryText: {
    marginTop: 4,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    width: '45%',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  addToCart: {
    marginTop: 8,
    backgroundColor: '#28a745',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
  },
  backSoon: {
    marginTop: 8,
    color: 'red',
  },
  inviteSection: {
    backgroundColor: '#e7f3ff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
});

export default HomeScreen;
