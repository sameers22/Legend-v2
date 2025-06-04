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
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { menuData } from '../data/menuData';
import { useSauceSliderData } from '../hooks/useSauceSliderData';
import type { DrawerParamList } from '../types';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SOCIAL_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><script src="https://static.elfsight.com/platform/platform.js" defer></script></head><body><div class="elfsight-app-d91673c9-4a46-464c-9f59-7171b2c7f3f4" data-elfsight-app-lazy></div></body></html>`;
const BANNER_HTML = `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><script src="https://static.elfsight.com/platform/platform.js" async></script></head><body><div class="elfsight-app-e1a2565e-be41-4baf-972d-2e8d95b112a7" data-elfsight-app-lazy></div></body></html>`;

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const flatListRef = useRef<FlatList>(null);
  const sauceSliderRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sauceIndex, setSauceIndex] = useState(0);

  const { sauceImages, loading } = useSauceSliderData();

  const featuredItems = menuData
    .flatMap(section => section.items.filter(item => item.image))
    .slice(0, 10);

  // Auto-rotate food slider
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

  const renderSauceItem = ({ item }: any) => (
    <View style={styles.sauceItem}>
      <Image source={{ uri: item.image }} style={styles.sauceImage} resizeMode="contain" />
      <Text style={styles.sliderTitle}>{item.title}</Text>
      <Text style={styles.sliderDesc}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Legend Cookhouse! 🍽️</Text>
        <Text style={styles.subtitle}>Where Flavor Meets Tradition</Text>

        <Text style={styles.description}>
          LEGEND COOKHOUSE is the best Guyanese-American fusion cuisine restaurant and bar located in South Ozone Park/Richmond Hill, NYC. We provide a satisfying fine dining experience, offering the best and most popular <Text style={styles.bold2}>Guyanese food dishes</Text>.
        </Text>

        <Text style={styles.description}>
          Our menu is inspired by the flavors of the Caribbean, South America, and the United States, carefully crafted to bring bold, authentic flavors to every dish. Whether you're looking for a quick bite, a family meal, or a night out, we’ve got you covered!
        </Text>

        <Text style={styles.description}>
          At Legend Cookhouse, we take pride in creating a warm, family-friendly atmosphere. Our goal is to keep Guyanese culinary traditions alive while also introducing new generations to our rich food culture.
        </Text>

        {/* Featured Dishes */}
        <FlatList
          data={featuredItems}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          keyExtractor={(_, index) => index.toString()}
          style={styles.sliderWrapper}
        />

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.menuButtonText}>View Full Menu</Text>
        </TouchableOpacity>

        {/* Banner Widget */}
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

        {/* Sauce Slider */}
        <Text style={styles.sectionTitle}>Our Signature Sauces</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#D2691E" />
        ) : (
          <FlatList
            data={sauceImages}
            renderItem={renderSauceItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            style={styles.sliderWrapper}
          />
        )}

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Sauce')}
        >
          <Text style={styles.menuButtonText}>View the Sauces</Text>
        </TouchableOpacity>

        {/* Social Feed */}
        <Text style={styles.followUs}>Follow Us</Text>
        <Text style={styles.followDesc}>Stay updated with our latest offers and events!</Text>
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
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#D2691E', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#333', textAlign: 'center', marginBottom: 20 },
  description: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  bold2: {
    fontWeight: 'bold',
    color: '#8B0000',
  },  
  sliderWrapper: { height: 260, marginBottom: 10 },
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
  sauceItem: {
    width: screenWidth * 0.85,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sauceImage: {
    width: screenWidth * 0.7,
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  sliderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
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
  webViewWrapper1: {
    width: screenWidth * 0.95,
    height: screenHeight * 1.6,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    marginTop: 20,
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
});

export default HomeScreen;
