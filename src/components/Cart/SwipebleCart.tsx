import { StyleSheet, View } from 'react-native'
import React from 'react'
import Animated, { SlideOutLeft } from 'react-native-reanimated'
import { Swipeable } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'
import { CartItem } from './CartItem'

const styles = StyleSheet.create({
  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function SwipebleCart ({ item, index, data, setData, handleDelete }: any) {
  return (
  <Animated.View exiting={SlideOutLeft.duration(1000)}>
    <Swipeable renderRightActions={() => <View style={styles.cartTrashButton}>
      <IconButton
        icon='delete'
        size={24}
        onPress={() => handleDelete(item.id)}
      />
      </View> }
    >
      <CartItem item={item} key={index} data={data} setData={setData} index={index} />
    </Swipeable>
  </Animated.View>
  )
}
