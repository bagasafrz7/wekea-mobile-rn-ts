import React from 'react'
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

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
      gap: 20,
      margin: 20
    }}>
      <Text>Home Screen</Text>
      <TextInput
        label="Email"
      />
      <Button
        onPress={() => { navigation.navigate('Detail') }}
        mode='contained'
      >
        Move to Detail Page
      </Button>
    </View>
  )
}

export default HomeScreen
