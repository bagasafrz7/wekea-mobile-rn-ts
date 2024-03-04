import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { IconButton } from 'react-native-paper'
import DetailScreen from 'src/view/screens/detail/DetailScreen'
import MenuScreen from 'src/view/screens/menu/MenuScreen'
import EditProfileScreen from 'src/view/screens/profile/EditProfileScreen'
import ProfileScreen from 'src/view/screens/profile/ProfileScreen'
import HomeTabs from './tabs'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Group>
          <Stack.Screen name='Main' component={HomeTabs} />
          <Stack.Screen name='Detail' component={DetailScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='Menu'
            options={({ navigation }) => ({
              headerShown: true,
              title: 'Halaman Menu',
              headerLeft: () => (
                <IconButton
                  icon='close'
                  onPress={() => navigation.goBack()}
                />
              )
            })}
          component={MenuScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
                <IconButton
                  icon='arrow-left'
                  onPress={() => navigation.goBack()}
                />
            )
          })}
        >
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
          />
          <Stack.Screen
            name='EditProfile'
            options={() => ({
              title: 'Edit Profile'
            })}
            component={EditProfileScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
