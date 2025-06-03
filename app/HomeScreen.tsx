import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SOCIAL_HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://static.elfsight.com/platform/platform.js" defer></script>
    </head>
    <body>
      <div class="elfsight-app-d91673c9-4a46-464c-9f59-7171b2c7f3f4" data-elfsight-app-lazy></div>
    </body>
  </html>
`;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Legend Cookhouse! 🍽️</Text>
        <Text style={styles.subtitle}>Where Flavor Meets Tradition</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/MenuScreen')}>
            <Text style={styles.buttonText}>Explore Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/BookingScreen')}>
            <Text style={styles.buttonText}>Book a Table or Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/SauceScreen')}>
            <Text style={styles.buttonText}>Shop Sauces</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/AccountScreen')}>
            <Text style={styles.buttonText}>My Account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.followUs}>Follow Us</Text>
        <Text style={styles.followDesc}>Stay updated with our latest offers and events!</Text>

        <View style={styles.webViewWrapper}>
          <WebView
            originWhitelist={['*']}
            source={{ html: SOCIAL_HTML }}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
            style={styles.webView}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D2691E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGroup: {
    width: screenWidth * 0.9,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  followUs: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginTop: 30,
    marginBottom: 4,
  },
  followDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  webViewWrapper: {
    width: screenWidth * 0.95,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
