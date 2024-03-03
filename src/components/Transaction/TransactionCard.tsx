import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { priceFormating } from '../../utils/helpers/priceFormating'
import Typography from '../Global/Typography'

const styles = StyleSheet.create({
  transactionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    aligndatas: 'center'
  },

  transactionBodyLeft: {
    flexDirection: 'row',
    aligndatas: 'center'
  },

  transactionBodyImage: {
    width: 50,
    height: 50,
    borderRadius: 10
  },

  transactionBodyText: {
    marginLeft: 10,
    gap: 5
  },

  transactionBodyTextTitle: {
    fontWeight: 'bold'
  },

  transactionBodyTextDesc: {
    fontWeight: '400'
  }
})

export default function TransactionCard ({ item }: any) {
  return (
    <View style={styles.transactionBody}>
      <View style={styles.transactionBodyLeft}>
        <Image source={{ uri: item.image }} style={styles.transactionBodyImage} />
        <View style={styles.transactionBodyText}>
          <Typography size='md' weight='bold'>
            {item.name}
          </Typography>

          <Typography size='sm' weight='normal'>
            Qty: {item.qty}
          </Typography>
        </View>
      </View>
      <Typography size='md' weight='bold'>
        {priceFormating(item.price)}
      </Typography>
    </View>
  )
}
