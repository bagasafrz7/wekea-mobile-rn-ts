import { FlatList } from 'react-native'
import React from 'react'
import TransactionContainer from '../../../components/Transaction/TransactionContainer'
import SearchBar from '../../../components/Global/SearchBar'
import Container from '../../../components/Global/Container'

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
    <Container>
      <SearchBar />

      <FlatList
        data={data}
        renderItem={({ item }) => <TransactionContainer data={item} /> }
      />
    </Container>
  )
}
