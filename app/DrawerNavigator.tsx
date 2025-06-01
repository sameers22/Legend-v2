import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import SauceScreen from './SauceScreen';
import LegendSocialScreen from './LegendSocialScreen';
import AccountScreen from './AccountScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#FFD700', // Black background
          width: 250,
        },
        drawerLabelStyle: {
          color: '#000000', // Black text
          fontSize: 18,
          marginLeft: -10,
        },
        drawerActiveTintColor: '#ffffff', // White text when selected
        drawerInactiveTintColor: '#000000', // Black text normally
        drawerActiveBackgroundColor: '#ffffff', // Dark gray when selected
        drawerItemStyle: {
          borderRadius: 5,
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Sauce" component={SauceScreen} />
      <Drawer.Screen name="Legend Social" component={LegendSocialScreen} />
      <Drawer.Screen name="Account">
  {() => <AccountScreen goToLogin={() => {
    AsyncStorage.removeItem('loggedIn');
    AsyncStorage.removeItem('currentUser');
    location.reload(); // Forces the RootLayout to reset to login
  }} />}
</Drawer.Screen>

    </Drawer.Navigator>
  );
}
