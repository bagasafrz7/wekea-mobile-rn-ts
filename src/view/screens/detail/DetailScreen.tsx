import CarouselSection from '@components/Detail/CarouselSection'
import DescriptionSection from '@components/Detail/DescriptionSection'
import LocationSection from '@components/Detail/LocationSection'
import PriceSection from '@components/Detail/PriceSection'
import RatingSection from '@components/Detail/RatingSection'
import ReviewSection from '@components/Detail/ReviewSection'
import Container from '@components/Global/Container'
import { HStack } from '@components/Global/HStack'
import Typography from '@components/Global/Typography'
import { VStack } from '@components/Global/VStack'
import React from 'react'
import { ScrollView } from 'react-native'
import { Divider, IconButton } from 'react-native-paper'
import { DUMMY_DATA } from 'src/const/data/DUMMY_DATA'
import styled from 'styled-components/native'

const StickyBottom = styled.View`
position: absolute;
bottom: 0;
width: 100%;
padding: 6px;
background-color: #fff;
border-top: 0.2px solid #eee;
`

const CheckoutButton = styled.TouchableOpacity`
background-color: #007bff;
padding: 10px;
justify-content: center;
align-items: center;
border-radius: 10px;
margin-horizontal: 10px;
flex: 1;
`

interface DetailScreenProps {
  navigation: {
    navigate: (routeName: string) => void
    goBack: () => void
  }
}

function DetailScreen ({ navigation }: DetailScreenProps) {
  return (
    <>
    <ScrollView>
      <CarouselSection data={DUMMY_DATA} navigation={navigation} />

      <Container>
        <VStack gap="10px">
          <Typography size="x-lg" weight="title">
            {DUMMY_DATA.name}
          </Typography>

          <RatingSection data={DUMMY_DATA} />

          <PriceSection data={DUMMY_DATA} />

          <Divider />

          <DescriptionSection data={DUMMY_DATA} />

          <LocationSection data={DUMMY_DATA} />

          <ReviewSection data={DUMMY_DATA} />
        </VStack>
      </Container>
    </ScrollView>

    <StickyBottom>
      <HStack gap="10px" align="center" justify="space-between">
        <IconButton icon="cart" iconColor="#6c7576" size={25} />
        <CheckoutButton>
          <Typography color="white" weight="bold">
            Beli
          </Typography>
        </CheckoutButton>
      </HStack>
    </StickyBottom>
    </>
  )
}

export default DetailScreen
