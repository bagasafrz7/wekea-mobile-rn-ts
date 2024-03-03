import React from 'react'
import { List } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HStack } from '../Global/HStack'
import Typography from '../Global/Typography'
import { VStack } from '../Global/VStack'

export default function ReviewSection ({ data }: any) {
  return (
    <VStack gap="10px">
      <HStack justify="space-between" align="center">
        <Typography size="lg" weight="bold">
          Ulasan
        </Typography>
        <Typography size="md" weight="medium">
          Lihat Semua
        </Typography>
      </HStack>

      <List.Section>
        {
          data.reviews?.map((item: any, index: number) => (
            <List.Item
              style={{
                borderRadius: 10,
                padding: 10,
                marginVertical: 5,
                borderWidth: 0.4
              }}
              key={index}
              title={item.name}
              description={item.review}
              left={() => <List.Image source={{ uri: item.image }} />}
              right={() => (
                <HStack gap="10px">
                  {
                    Array.from({ length: 5 }).map((_, index) => {
                      const startColor = index < item.rating ? '#ffc700' : '#6c757d'
                      return (
                        <Ionicons name="star" size={20} color={startColor} key={index} />
                      )
                    })}
                </HStack>
              )}
            />
          ))
        }
      </List.Section>
    </VStack>
  )
}
