import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import CardCarouselItem from './CardCarouselItem'

interface MarkerData {
  coordinate: { latitude: number, longitude: number }
  title: string
  address: string
  image: string
}

export interface RegionInterface {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface CarouselDiscoverProps {
  scrollCarouselRef: any
  width: number
  markers: MarkerData[]
  mapAnimation: any
  mapRef: any
  region: RegionInterface
}

export default function CarouselDiscover (props: CarouselDiscoverProps) {
  const {
    scrollCarouselRef,
    width,
    markers,
    mapAnimation,
    mapRef,
    region
  } = props

  return (
    <Carousel
      ref={scrollCarouselRef}
      style={{
        top: 20
      }}
      loop={false}
      width={width - 30}
      height={250}
      data={markers}
      scrollAnimationDuration={500}
      onProgressChange={(progess) => {
        mapAnimation.setValue(Math.abs(progess))
      }}
      onSnapToItem={(index) => {
        const { coordinate } = markers[index]

        mapRef.current.animateToRegion({
          ...coordinate,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta
        })
      }}
      renderItem={({ item }) => (
        <CardCarouselItem
          item={item}
        />
      )}
    />
  )
}
