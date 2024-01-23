import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import TransactionContainer from '../../../components/Transaction/TransactionContainer'
import SearchBar from '../../../components/Global/SearchBar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  searchbar: {
    backgroundColor: 'white'
  }
})

export default function TransactionScreen () {
  const data = [
    {
      id: 1,
      date: '12/12/2021',
      status: 'Sedang dikirim',
      items: [
        {
          id: 1,
          name: 'Meja',
          qty: 1,
          price: 100,
          image: 'https://picsum.photos/700'
        }
      ]
    },
    {
      id: 2,
      date: '12/12/2021',
      status: 'Sedang dikirim',
      items: [
        {
          id: 1,
          name: 'Lemari',
          qty: 1,
          price: 100,
          image: 'https://picsum.photos/700'
        }
      ]
    },
    {
      id: 3,
      date: '12/12/2021',
      status: 'Sedang dikirim',
      items: [
        {
          id: 1,
          name: 'TV',
          qty: 1,
          price: 100,
          image: 'https://picsum.photos/700'
        },
        {
          id: 2,
          name: 'Kipas Angin',
          qty: 1,
          price: 100,
          image: 'https://picsum.photos/700'
        }
      ]
    }
  ]

  return (
    <View style={styles.container}>
      <SearchBar />

      <FlatList
        style={{
          marginTop: 15
        }}
        data={data}
        renderItem={({ item }) => <TransactionContainer data={item} /> }
      />
    </View>
  )
}
