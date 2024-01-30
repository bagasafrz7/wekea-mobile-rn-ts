import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import Typography from '../Global/Typography'

const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50
  }
})

export default function Category () {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          Array.from(Array(5)).map((index) => (
            <IconButton
              key={index}
              icon={({ size, color }) =>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon name='home-outline' size={size} color={color} />
                  <Typography size='sm'>
                    Home
                  </Typography>
                </View>
              }
              style={styles.iconButton}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}
