import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakeOutScreen from './TakeOutScreen';
import DineInScreen from './DineInScreen';

const Tab = createMaterialTopTabNavigator();

export default function MenuScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: '#FFD700' },
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen name="Dine In" component={DineInScreen} />
      <Tab.Screen name="Take Out" component={TakeOutScreen} />
    </Tab.Navigator>
  );
}
