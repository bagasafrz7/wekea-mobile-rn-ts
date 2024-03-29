import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../view/screens/home/HomeScreen'
import CartScreen from '../view/screens/home/CartScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import DiscoverScreen from '../view/screens/home/DiscoverScreen'
import TransactionScreen from '../view/screens/home/TransactionScreen'

const Tabs = createBottomTabNavigator()

export default function HomeTabs () {
  return (
    <Tabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            borderRadius: 15,
            height: 50
          }
        }}
    >
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='Maps'
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'map' : 'map-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='Favorite'
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='Transaction'
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'receipt' : 'receipt-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tabs.Navigator>
  )
}
