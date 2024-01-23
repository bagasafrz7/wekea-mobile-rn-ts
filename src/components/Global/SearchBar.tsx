import { View, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton, Searchbar as Search, TouchableRipple } from 'react-native-paper'

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 10
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    flex: 1
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10
  },
  searchbar: {
    backgroundColor: 'white'
  }
})

export default function SearchBar ({ isHasButton }: any) {
  return (
    <View style={styles.searchBarContainer}>
      <Search
        placeholder='Mau cari apa?'
        theme={{
          roundness: 2
        }}
        value=''
        style={[styles.inputWrapper, { flex: 1 }]}
      />
      {
        isHasButton && (
          <TouchableRipple style={[styles.inputWrapper, { justifyContent: 'center' }]}>
            <IconButton icon='menu' />
          </TouchableRipple>
        )
      }
    </View>
  )
}
