import React, { useState } from 'react'
import { Animated, Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

const ImageItem = styled.Image`
width: 100%;
height: 100%;
resize-mode: cover;
`

const BackButton = styled(Ionicons)`
position: absolute;
top: 20px;
left: 20px;
z-index: 100;
`

interface BulletIndicatorProps {
  data: string[]
  bulletInterpolate: any
}

const BulletCardWrapper = styled.View`
flex-direction: row;
position: absolute;
bottom: 0;
z-index: 100;
align-self: center;
margin-bottom: 20px;
`

const BulletCardItem = styled(Animated.View)`
width: 10px;
height: 10px;
border-radius: 100px;
background-color: #eee;
margin-horizontal: 5px;
`

function BulletIndicator ({ data, bulletInterpolate }: BulletIndicatorProps) {
  return (
    <BulletCardWrapper>
      {data?.map((_, index) => <BulletCardItem key={index} style={
        {
          opacity: bulletInterpolate[index].opacity
        }
      } />)}
    </BulletCardWrapper>
  )
}

export default function CarouselSection ({ navigation, data }: any) {
  const { width } = Dimensions.get('window')
  const [scrollIndex, setScrollIndex] = useState<number>(0)
  const bulletScrollView = new Animated.Value(0)

  const bulletInterpolate = data.images?.map((_, index) => {
    const opacity = bulletScrollView.interpolate({
      inputRange: index === scrollIndex ? [0, 1, 2] : [0, 1, 2],
      outputRange: index === scrollIndex ? [1, 0, 1] : [0.5, 1, 0.5],
      extrapolate: 'clamp'
    })

    return { opacity }
  })

  return (
    <View>
      <BackButton name='arrow-back' size={30} color='#eee' onPress={() => navigation.goBack()} />
      <Carousel
        loop={false}
        width={width}
        height={400}
        data={data.images}
        renderItem={({ item }) => {
          return (
            <ImageItem source={item} />
          )
        }}
        onSnapToItem={(index) => setScrollIndex(index)}
      />
      <BulletIndicator data={data.images} bulletInterpolate={bulletInterpolate} />
    </View>
  )
}
