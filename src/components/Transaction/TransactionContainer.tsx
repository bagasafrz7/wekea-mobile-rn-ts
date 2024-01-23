import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'
import Badge from '../Global/Badge'
import Button from '../Global/Button'
import TransactionCard from './TransactionCard'

const styles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    gap: 16
  },

  transactionHeader: {
    flexDirection: 'row',
    aligndatas: 'center',
    justifyContent: 'space-between'
  },

  transactionDate: {
    fontWeight: '400',
    fontSize: 12,
    marginRight: 10
  },

  transactionStatus: {
    padding: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange'
  },

  transactionStatusText: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 12
  },

  transactionFooter: {
    alignItems: 'flex-end',
    gap: 5
  },

  transactionFooterButton: {
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green'
  }
})

export default function TransactionContainer ({ data }: any) {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionDate}>{data.date}</Text>
        <Badge label='Sedang dikirim' variant='warning' mode='contained' />
      </View>

      {
        data?.items.map((i: any) => (
          <>
          <TransactionCard item={i} />
          </>
        ))
      }

      <Divider />
      <View style={styles.transactionFooter}>
        <Button
          icon='truck'
          label='Lacak'
          mode='outlined'
          size='md'
          variant='success'
        />
      </View>
    </View>
  )
}
