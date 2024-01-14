import { Dimensions, Linking, Platform, StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-reanimated-carousel'
import { Card, IconButton } from 'react-native-paper'
import CarouselDiscover from '../../../components/Discover/CarouselDiscover'

const storeMarker = require('../../../../assets/icons/store-icon.png')

interface MarkerData {
  coordinate: { latitude: number, longitude: number }
  title: string
  address: string
  image: string
}

export default function DiscoverScreen () {
  const width = Dimensions.get('window').width

  const mapRef = useRef<null>(null)
  const scrollCarouselRef = useRef<null>(null)
  const mapAnimation = new Animated.Value(0)
  const carouselAnimation = new Animated.Value(0)
  const carouselAnimationRef = useRef<number | any>(carouselAnimation)
  const [isShowCarousel, setIsShowCarousel] = useState<boolean>(false)

  const region = {
    latitude: 37.7896386,
    longitude: -122.421646,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const markers: MarkerData[] = [
    {
      coordinate: { latitude: 37.8025259, longitude: -122.4351431 },
      title: 'Wekea Drop Store',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      coordinate: {
        latitude: 37.7896386,
        longitude: -122.421646
      },
      title: 'Wekea Drop Store 2',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      coordinate: { latitude: 37.7665248, longitude: -122.4161628 },
      title: 'Wekea Drop Store 3',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]

  const onPressMarker = (mapData: any) => {
    setIsShowCarousel(true)
    Animated.timing(carouselAnimationRef.current, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()

    const markerId = mapData._targetInst.return.key

    if (scrollCarouselRef.current) {
      scrollCarouselRef.current.scrollTo({ index: +markerId, animated: true })
    }
  }

  const interpolations = markers.map((_, index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width
    ]

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp'
    })

    return { scale }
  })

  const carouselInterpolate = carouselAnimationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1000],
    extrapolate: 'clamp'
  })

  const onHideCarousel = () => {
    setIsShowCarousel((prev) => !prev)
    Animated.timing(carouselAnimationRef.current, {
      toValue: isShowCarousel ? 1 : 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        ref={mapRef}
        initialRegion={region}
        style={StyleSheet.absoluteFillObject}
      >
        {
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.address}
              onPress={(e) => { onPressMarker(e) }}
            >
              <Animated.Image
                source={storeMarker}
                style={{
                  transform: [
                    {
                      scale: interpolations[index].scale
                    }
                  ]
                }}
              />
            </Marker>
          ))
        }
      </MapView>

      <View
        style={{
          alignItems: 'flex-end'
        }}
      >
        <IconButton
          style={{
            backgroundColor: '#fff'
          }}
          mode="contained"
          onPress={onHideCarousel}
          icon={ isShowCarousel ? 'close' : 'menu' }
        />
      </View>

      <Animated.View
        style={{
          alignItems: 'center',
          transform: [{
            translateY: carouselInterpolate
          }]
        }}
      >
        <CarouselDiscover
          scrollCarouselRef={scrollCarouselRef}
          width={width}
          markers={markers}
          mapAnimation={mapAnimation}
          mapRef={mapRef}
          region={region}
        />
      </Animated.View>
    </View>
  )
}
