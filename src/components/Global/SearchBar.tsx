import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper'

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    flex: 1
  },
  borderShadow: {
    borderRadius: 100,
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5'
  }
})

export default function SearchBar () {
  return (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Icon name='search' size={12} />
        <TextInput
          placeholder='Mau cari barang apa?'
        />
      </View>
      <IconButton icon='menu' />
    </View>
  )
}
