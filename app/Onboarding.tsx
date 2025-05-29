import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const steps = [
  {
    title: 'Welcome to Legend Cookhouse',
    description: 'Order your favorite dishes from the comfort of your home.',
    image: require('../assets/booking.png'),
  },
  {
    title: 'Book a Table',
    description: 'Reserve tables instantly for your dine-in experience.',
    image: require('../assets/order.png'),
  },
  {
    title: 'Join the Legend Family',
    description: 'Get rewards, updates, and member-only deals.',
    image: require('../assets/offers.png'),
  },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleNext = async () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      router.replace('/'); // Navigate to main tabs
    }
  };

  const { title, description, image } = steps[step];

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {step === steps.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
