import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper'
import Typography from '../Global/Typography'

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
  const navigation = useNavigation()

  return (
    <View>
    <Typography size='lg' weight='bold'>
      Popular
    </Typography>
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
            onPress={() => {
              navigation.navigate('Detail')
            }}
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
              <Typography size='md' weight='bold'>
                Kursi
              </Typography>
              <Typography size='md' weight='normal'>Rp. 1.000.000</Typography>
            </Card.Content>
          </Card>
        ))
      }
    </ScrollView>
  </View>
  )
}
