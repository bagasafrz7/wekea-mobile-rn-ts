import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { IconButton } from 'react-native-paper'
import MenuScreen from 'src/view/screens/menu/MenuScreen'
import DetailScreen from '../view/screens/detail/DetailScreen'
import HomeTabs from './tabs'

const Stack = createNativeStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Main' component={HomeTabs} />
        <Stack.Screen name='Detail' component={DetailScreen} />
        <Stack.Screen
          name='Menu'
          options={({ navigation }) => ({
            presentation: 'modal',
            headerShown: true,
            title: 'Halaman Menu',
            headerRight: () => (
              <IconButton
                icon='close'
                onPress={() => navigation.goBack()}
              />
            )
          })}
        component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
