import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'

interface HomeScreenProps {
  navigation: {
    navigate: (screenName: string) => void
  }
}

function HomeScreen ({ navigation }: HomeScreenProps) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => { navigation.navigate('Detail') }}
        title='Move to Detail Page'
      />
    </View>
  )
}

function DetailScreen () {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Detail Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Detail' component={DetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
