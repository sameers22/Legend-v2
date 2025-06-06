import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function Register({ goToLogin }: { goToLogin: () => void }) {
  const [step, setStep] = useState<'form' | 'verify'>('form');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', birthday: '', password: '' });

  const handleRegister = async () => {
    const { name, phone, birthday, password } = form;
    if (!name || !email || !phone || !birthday || !password) {
      Alert.alert('Error', 'All fields required');
      return;
    }

    const res = await fetch('https://legendbackend.onrender.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, email }),
    });

    const data = await res.json();
    if (res.ok) {
      Alert.alert('Code Sent', 'Check your email for a 6-digit code');
      setStep('verify');
    } else {
      Alert.alert('Error', data.message);
    }
  };

  const handleVerify = async () => {
    const res = await fetch('https://legendbackend.onrender.com/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();
    if (res.ok) {
      Alert.alert('Success', 'Email verified!');
      goToLogin();
    } else {
      Alert.alert('Error', data.message);
    }
  };

  return (
    <View style={styles.container}>
      {step === 'form' ? (
        <>
          <Text style={styles.header}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
            onChangeText={val => setForm({ ...form, name: val })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="black"
            onChangeText={val => setForm({ ...form, phone: val })}
          />
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            placeholderTextColor="black"
            onChangeText={val => setForm({ ...form, birthday: val })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            onChangeText={val => setForm({ ...form, password: val })}
          />
          <Button title="Register" onPress={handleRegister} />

          <TouchableOpacity onPress={goToLogin} style={{ marginTop: 15 }}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.header}>Verify Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter 6-digit code"
            placeholderTextColor="black"
            keyboardType="number-pad"
            onChangeText={setCode}
          />
          <Button title="Verify Code" onPress={handleVerify} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
