import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/authContext'; // Assuming AuthContext is used for user data

const ProfileScreen = () => {
  const { user } = useContext(AuthContext); // Retrieve user data from context
  const navigation = useNavigation();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || ''); // Use user data from backend
  const [email, setEmail] = useState(user?.email || ''); // Use user data from backend
  const [mobileNumber, setMobileNumber] = useState(user?.mobileNumber || '');
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);

  const handleSave = () => {
    setEditing(false);
    // Save logic here if necessary (e.g., sending updated info to backend)
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Reset stack and navigate to Login
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.profilePictureContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={profilePicture ? { uri: profilePicture } : require('../assets/icons/default-profile.png')}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileItem}>
        <Text style={styles.label}>Name</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        ) : (
          <Text style={styles.value}>{name}</Text>
        )}
      </View>

      <View style={styles.profileItem}>
        <Text style={styles.label}>Email</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        ) : (
          <Text style={styles.value}>{email}</Text>
        )}
      </View>

      <View style={styles.profileItem}>
        <Text style={styles.label}>Mobile Number</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.value}>{mobileNumber}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setEditing(!editing)}
      >
        <Text style={styles.editButtonText}>{editing ? 'Cancel' : 'Edit'}</Text>
      </TouchableOpacity>

      {editing && (
        <Button title="Save" onPress={handleSave} />
      )}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  profileItem: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  editButton: {
    marginTop: 16,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
