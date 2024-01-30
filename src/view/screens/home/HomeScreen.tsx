import React from 'react'
import { ScrollView } from 'react-native'
import SearchBar from '../../../components/Global/SearchBar'
import CustomCarousel from '../../../components/Home/CustomCarousel'
import Category from '../../../components/Home/Category'
import Promotion from '../../../components/Home/Promotion'
import ProductList from '../../../components/Home/ProductList'
import Container from '../../../components/Global/Container'

interface HomeScreenProps {
  navigation: {
    navigate: (screenName: string) => void
  }
}

function HomeScreen ({ navigation }: HomeScreenProps) {
  return (
  <ScrollView>
    <Container>
      <SearchBar isHasButton />
      <CustomCarousel />
      <Category />
      <Promotion />
      <ProductList />
    </Container>
  </ScrollView>
  )
}

export default HomeScreen
