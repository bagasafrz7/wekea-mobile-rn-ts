import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HStack } from '../Global/HStack'
import Typography from '../Global/Typography'

export default function RatingSection ({ data }: any) {
  return (
    <HStack gap="15px">
      <Typography color="secondary" size="lg">
        {data.averageRating}
      </Typography>

      <HStack gap="5px">
        {
          Array.from({ length: 5 }).map((_, index) => {
            const startColor = index < data.averageRating ? '#ffc700' : '#6c757d'

            return <Ionicons name="star" size={20} color={startColor} key={index} />
          })
        }
      </HStack>

      <Typography color='secondary' size="lg" weight='light'>
        (
          {data.countReview}
          {' '}
          reviews
        )
      </Typography>
    </HStack>
  )
}
