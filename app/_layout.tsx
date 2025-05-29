import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import 'react-native-url-polyfill/auto';

export default function RootLayout() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'main'>('splash');

  useEffect(() => {
    const showSplashThenDecide = async () => {
      await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for splash

      const onboardingDone = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingDone === 'true') {
        setCurrentScreen('main');
      } else {
        setCurrentScreen('onboarding');
      }
    };

    showSplashThenDecide();
  }, []);

  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  if (currentScreen === 'onboarding') {
    return <Onboarding />;
  }

  return <Slot />;
}
