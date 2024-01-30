import { View, Linking, Platform } from 'react-native'
import React from 'react'
import { Card, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import Typography from '../Global/Typography'

interface MarkerData {
  coordinate: { latitude: number, longitude: number }
  title: string
  address: string
  image: string
}

export interface CardCarouselItemProps {
  item: MarkerData
}

export default function CardCarouselItem (props: CardCarouselItemProps) {
  const { item } = props

  return (
    <Card
      style={{
        overflow: 'hidden'
      }}
    >
      <Card.Cover
        source={{ uri: item.image }}
        style={{
          height: 150,
          borderRadius: 0
        }}
      />
      <Card.Content
        style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View>
          <Typography size='lg' weight='bold'>{item.title}</Typography>
          <Typography size='md' weight='normal'>{item.address}</Typography>
        </View>
        <IconButton
          mode="outlined"
          onPress={() =>
            Linking.openURL(Platform.OS === 'ios' ? `maps://app?daddr=${item.coordinate.latitude},${item.coordinate.longitude}` : `google.navigation:q=${item.coordinate.latitude},${item.coordinate.longitude}`)
          }
          icon={() => <Icon size={24} name="locate" /> }
        />
      </Card.Content>
    </Card>
  )
}
