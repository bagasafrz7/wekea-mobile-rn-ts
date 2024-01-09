import { Dimensions, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const styles = StyleSheet.create({
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  }
})

export default function CustomCarousel () {
  const width = Dimensions.get('window').width

  const dataCarousel = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <View style={{ alignItems: 'center' }}>
      <Carousel
        loop={false}
        width={width - 30}
        height={width / 2}
        data={dataCarousel}
        scrollAnimationDuration={500}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{ uri: item.imageUrl }}
          />
        )}
      />
    </View>
  )
}
