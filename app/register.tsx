import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function Register({ goToLogin }: { goToLogin: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !phone || !birthday || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const res = await fetch('http://192.168.12.56:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, birthday, password }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Success', 'Registered successfully!');
        goToLogin(); // Go back to login screen
      } else {
        Alert.alert('Error', data.message || 'Registration failed.');
      }
    } catch (err) {
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput style={styles.input} placeholder="Full Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Birthday (YYYY-MM-DD)" onChangeText={setBirthday} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 },
  link: { color: 'blue', textAlign: 'center', marginTop: 20, fontSize: 16 },
});
