import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding';
import HomeScreen from './HomeScreen'; // ✅ Import HomeScreen
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

export default function RootLayout() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'main'>('splash');

  useEffect(() => {
    const showSplashThenDecide = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const onboardingDone = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingDone === 'true') {
        setCurrentScreen('main');
      } else {
        setCurrentScreen('onboarding');
      }
    };

    showSplashThenDecide();
  }, []);

  if (currentScreen === 'splash') return <SplashScreen />;
  if (currentScreen === 'onboarding') return <Onboarding />;

  // ✅ Show Home after onboarding
  return <HomeScreen />;
}
