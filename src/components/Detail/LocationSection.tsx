import React from 'react'
import { ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import Typography from '../Global/Typography'
import { VStack } from '../Global/VStack'

export default function LocationSection ({ data }: any) {
  return (
    <VStack gap="10px">
      <Typography size="lg" weight="bold">
        Lokasi dan Stok
      </Typography>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 10
        }}
      >
        {
          data.locations?.map((item: any, index: number) => (
            <Card
              key={index}
              style={{
                width: 200,
                overflow: 'hidden',
                marginRight: 10
              }}
            >
              <Card.Cover source={item.image} />
              <Card.Content style={{
                padding: 10
              }}>
                <Typography size="lg" weight="bold">
                  {item.name}
                </Typography>
                <Typography size="md" weight="light">
                  {item.location}
                </Typography>
                <Typography size="md" weight="light">
                  Stock: {item.stock}
                </Typography>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </VStack>
  )
}
