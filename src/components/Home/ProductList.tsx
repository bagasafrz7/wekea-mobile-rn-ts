import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const furnitureImg = require('../../../assets/product/1.jpg')

const styles = StyleSheet.create({
  titlePopular: {
    fontWeight: 'bold',
    fontSize: 18
  },
  cardProduct: {
    width: 150,
    overflow: 'hidden',
    marginRight: 15,
    marginBottom: 5
  },
  cardCoverProduct: {
    borderRadius: 0,
    height: 150
  },
  titleProduct: {
    fontWeight: '500',
    fontSize: 16
  }
})

export default function ProductList () {
  return (
    <View>
    <Text
      style={styles.titlePopular}
    >
        Popular
    </Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 10
      }}
    >
      {
        Array.from(Array(4)).map((index) => (
          <Card
            key={index}
            style={styles.cardProduct}
          >
            <Card.Cover
              source={furnitureImg}
              style={styles.cardCoverProduct}
            />
            <Card.Content
              style={{
                padding: 10
              }}
            >
              <Text
                style={styles.titleProduct}
              >
                Kursi
              </Text>
              <Text>Rp. 1.000.000</Text>
            </Card.Content>
          </Card>
        ))
      }
    </ScrollView>
  </View>
  )
}
