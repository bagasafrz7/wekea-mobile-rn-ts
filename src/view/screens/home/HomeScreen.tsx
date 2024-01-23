import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../../../components/Global/SearchBar'
import CustomCarousel from '../../../components/Home/CustomCarousel'
import Category from '../../../components/Home/Category'
import Promotion from '../../../components/Home/Promotion'
import ProductList from '../../../components/Home/ProductList'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 15
  }
})

interface HomeScreenProps {
  navigation: {
    navigate: (screenName: string) => void
  }
}

function HomeScreen ({ navigation }: HomeScreenProps) {
  return (
  <ScrollView>
    <View style={styles.mainContainer}>
      <SearchBar isHasButton />
      <CustomCarousel />
      <Category />
      <Promotion />
      <ProductList />
    </View>

    <View
      style={{
        marginTop: '20%'
      }}
    />
  </ScrollView>
  )
}

export default HomeScreen
