import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  goToLogin: () => void;
};

export default function AccountScreen({ goToLogin }: Props) {
  const [user, setUser] = useState<{ name: string; email: string; phone: string; birthday: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const stored = await AsyncStorage.getItem('userData');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('loggedIn');
    await AsyncStorage.removeItem('userData');
    goToLogin(); // 👈 Use passed prop
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Account</Text>
      {user ? (
        <>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Birthday: {user.birthday}</Text>
        </>
      ) : (
        <Text>Loading user data...</Text>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
