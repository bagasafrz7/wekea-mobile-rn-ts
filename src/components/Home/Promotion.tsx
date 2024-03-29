import { View, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import Typography from '../Global/Typography'

const promoImg = require('../../../assets/promo/1.jpg')

const styles = StyleSheet.create({
  titlePopular: {
    fontWeight: 'bold',
    fontSize: 18
  },
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5
  },
  imagePressable: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray'
  }
})

export default function Promotion () {
  return (
    <View>
      <Typography size='lg' weight='bold'>
        Promosi Minggu Ini
      </Typography>

      <FlatList
        style={{
          paddingVertical: 10
        }}
        numColumns={2}
        data={Array(4)}
        renderItem={() =>
        <Pressable style={styles.pressableComponent}>
          <Image source={promoImg} style={styles.imagePressable} />
        </Pressable>
        }
      />
    </View>
  )
}
