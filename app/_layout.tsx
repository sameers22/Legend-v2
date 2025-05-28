import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import SplashScreen from './SplashScreen';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <Slot />;
}
