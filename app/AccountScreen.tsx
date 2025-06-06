import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  goToLogin: () => void;
};

export default function AccountScreen({ goToLogin }: Props) {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    birthday: string;
  } | null>(null);

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
    goToLogin();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>👤 My Account</Text>

        {user ? (
          <View style={styles.card}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user.name}</Text>

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>

            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{user.phone}</Text>

            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>{user.birthday}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#D2691E" />
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#D2691E',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
