import { Dimensions, Linking, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-reanimated-carousel'
import { Card, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

export default function DiscoverScreen () {
  const width = Dimensions.get('window').width

  const dataCarousel = [
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

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        initialRegion={{
          latitude: -6.2232038,
          longitude: 106.6402799,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={StyleSheet.absoluteFillObject}
      >
        <Marker
          coordinate={{
            latitude: -6.2232038,
            longitude: 106.6402799
          }}
          title="Lokasi Marker"
          description="Ini adalah lokasi yang Anda tentukan"
        />
      </MapView>
      <View style={{ alignItems: 'center' }}>
        <Carousel
          style={{
            top: 20
          }}
          loop={false}
          width={width - 30}
          height={250}
          data={dataCarousel}
          scrollAnimationDuration={500}
          renderItem={({ item }) => (
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
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: '500'
                    }}
                  >{item.title}</Text>
                  <Text>{item.address}</Text>
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
          )}
        />
      </View>
    </View>
  )
}
