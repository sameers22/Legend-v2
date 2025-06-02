import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding';
import HomeScreen from './HomeScreen';
import Login from './login';
import Register from './register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import DrawerNavigator from './DrawerNavigator';
import { CartProvider } from '../context/CartContext'; // ✅ added

export default function RootLayout() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login' | 'register' | 'main'>('splash');

  useEffect(() => {
    const showSplashThenDecide = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const onboardingDone = await AsyncStorage.getItem('onboardingCompleted');
      const loggedIn = await AsyncStorage.getItem('loggedIn');

      if (onboardingDone === 'true') {
        if (loggedIn === 'true') {
          setCurrentScreen('main');
        } else {
          setCurrentScreen('login');
        }
      } else {
        setCurrentScreen('onboarding');
      }
    };

    showSplashThenDecide();
  }, []);

  if (currentScreen === 'splash') return <SplashScreen />;
  if (currentScreen === 'onboarding') return <Onboarding />;
  if (currentScreen === 'login')
    return (
      <Login
        goToRegister={() => setCurrentScreen('register')}
        goToMain={() => setCurrentScreen('main')}
      />
    );
  if (currentScreen === 'register')
    return <Register goToLogin={() => setCurrentScreen('login')} />;

  return (
    <CartProvider>
      <DrawerNavigator />
    </CartProvider>
  );
}
