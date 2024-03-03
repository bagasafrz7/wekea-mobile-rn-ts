import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IconButton, List } from 'react-native-paper'
import { priceFormating } from '../../utils/helpers/priceFormating'
import Typography from '../Global/Typography'

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  cartItemLeft: {
    margin: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  cartItemRight: {
    alignItems: 'center',
    margin: 0,
    flexDirection: 'row'
  }
})

export function CartItem ({ item, index, data, setData }: any) {
  const qtyHandler = (condition: string) => {
    setData(data.map((prev: { quantity: number }, i: any) => {
      if (i === index) {
        return {
          ...prev,
          quantity: condition === 'increment' ? prev.quantity + 1 : prev.quantity - 1
        }
      }

      return prev
    }))
  }

  return (
    <>
    <List.Item
      title=""
      style={styles.cartItem}
      left={() => {
        return <View style={styles.cartItemLeft}>
          <Image source={{ uri: item.image }} style={styles.cartItemImg} />
          <View>
            <Typography size='lg' weight='medium'>{item.name}</Typography>
            <Typography size='md' weight='normal'>
              {priceFormating(item.price)}
            </Typography>
          </View>
        </View>
      }}
      right={() => {
        return <View style={styles.cartItemRight}>
          <IconButton
            icon='plus'
            size={14}
            onPress={() => qtyHandler('increment')}
          />
          <Typography size='md' weight='normal'>{item.quantity}</Typography>
          <IconButton
            icon='minus'
            size={14}
            disabled={data[index].quantity === 1}
            onPress={() => qtyHandler('decrement')}
          />
        </View>
      }}
    />
    </>
  )
}
