import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

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
          <Text style={styles.transactionBodyTextTitle}>
            {item.name}
          </Text>

          <Text style={styles.transactionBodyTextDesc}>
            Qty: {item.qty}
          </Text>
        </View>
      </View>
      <Text>
        {
          new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
          }).format(item.price)
        }
      </Text>
    </View>
  )
}
