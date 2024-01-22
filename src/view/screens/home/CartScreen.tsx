import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo, useState } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import SwipebleCart from '../../../components/Cart/SwipebleCart'

const styles = StyleSheet.create({
  cartItem: {
    marginHorizontal: 20,
    backgroundColor: '#ECECED',
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
  },
  checkoutBtnContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%'
  },
  checkoutButton: {
    marginHorizontal: 20,
    borderRadius: 10
  },
  cartTrashButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export interface dataCartItemType {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartScreen () {
  // Dummy Cart Item
  const DUMMY_CART_ITEMS = [
    {
      id: 1,
      name: 'Lemari',
      price: 10,
      image: 'https://picsum.photos/700',
      quantity: 1
    },
    {
      id: 2,
      name: 'Meja',
      price: 20,
      image: 'https://picsum.photos/700',
      quantity: 1
    },
    {
      id: 3,
      name: 'Kursi',
      price: 30,
      image: 'https://picsum.photos/700',
      quantity: 1
    }
  ]

  const [data, setData] = useState<dataCartItemType[]>(DUMMY_CART_ITEMS)

  const totalPrice = useMemo(() => data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0), [data])

  const handleDelete = (id: number) => {
    setData(data.filter(d => d.id !== id))
  }

  const renderItem = ({ item, index }: any) => {
    return (
      <SwipebleCart
        item={item}
        index={index}
        data={data}
        setData={setData}
        handleDelete={handleDelete}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Text
        style={{
          ...GlobalStyles.largeFont,
          marginVertical: 10,
          marginHorizontal: 20
        }}
      >
        Cart
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
      />

      <View style={styles.checkoutBtnContainer}>
        <Button
          style={styles.checkoutButton}
          mode='contained'
        >
          Checkout&nbsp; ${totalPrice}
        </Button>
      </View>
    </View>
  )
}
