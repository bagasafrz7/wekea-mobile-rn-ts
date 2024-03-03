import React from 'react'
import styled from 'styled-components/native'
import { priceFormating } from '../../utils/helpers/priceFormating'
import { HStack } from '../Global/HStack'
import Typography from '../Global/Typography'
import { VStack } from '../Global/VStack'

const DiscountWrapper = styled.View`
background-color: #007bff;
width: 55px;
height: 55px;
justify-content: center;
align-items: center;
border-radius: 50px;
`

export default function PriceSection ({ data }: any) {
  return (
    <HStack gap="15px" align="center" justify="space-between">
      <VStack>
        {
          data?.isDiscount && (
            <Typography color="secondary" size="lg" lineThrought>
              {priceFormating(data?.price)}
            </Typography>
          )
        }
        <Typography weight="bold" size="x-lg">
          {
            priceFormating(data?.isDiscount ? data.discountPrice : data.price)
          }
        </Typography>
      </VStack>

      {
        data?.isDiscount && (
          <DiscountWrapper>
            <Typography color="white">
              -${data.discountPercentage}
              %
            </Typography>
          </DiscountWrapper>
        )
      }
    </HStack>
  )
}
