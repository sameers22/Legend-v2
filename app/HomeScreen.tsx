import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { menuData } from '../data/menuData';
import type { DrawerParamList } from '../types';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

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

const BANNER_HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
    </head>
    <body>
      <div class="elfsight-app-e1a2565e-be41-4baf-972d-2e8d95b112a7" data-elfsight-app-lazy></div>
    </body>
  </html>
`;

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredItems = menuData
    .flatMap(section => section.items.filter(item => item.image))
    .slice(0, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % featuredItems.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: any) => (
    <View style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} resizeMode="cover" />
      <Text style={styles.sliderTitle}>{item.name}</Text>
      <Text style={styles.sliderDesc}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Legend Cookhouse! 🍽️</Text>
        <Text style={styles.subtitle}>Where Flavor Meets Tradition</Text>

        <View style={styles.sliderWrapper}>
          <FlatList
            data={featuredItems}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.menuButtonText}>View Full Menu</Text>
        </TouchableOpacity>

        {/* Elfsight Banner Widget */}
        <View style={styles.webViewWrapper1}>
          <WebView
            originWhitelist={['*']}
            source={{ html: BANNER_HTML }}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
            style={styles.webView}
          />
        </View>

        <Text style={styles.followUs}>Follow Us</Text>
        <Text style={styles.followDesc}>Stay updated with our latest offers and events!</Text>

        {/* Elfsight Social Widget */}
        <View style={styles.webViewWrapper2}>
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
};

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
    marginBottom: 20,
  },
  sliderWrapper: {
    height: 250,
    marginBottom: 0,
  },
  sliderItem: {
    width: screenWidth * 0.85,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sliderImage: {
    width: screenWidth * 0.8,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  sliderDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 24,
    width: '80%',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
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
  webViewWrapper1: {
    width: screenWidth * 0.95,
    height: screenHeight * 1.6,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    zIndex: 100,
  },
  webViewWrapper2: {
    width: screenWidth * 0.95,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
