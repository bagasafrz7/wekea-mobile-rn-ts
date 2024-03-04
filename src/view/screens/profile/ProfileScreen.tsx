import Container from '@components/Global/Container'
import { HStack } from '@components/Global/HStack'
import Typography from '@components/Global/Typography'
import { VStack } from '@components/Global/VStack'
import React from 'react'
import { Avatar, Divider, IconButton } from 'react-native-paper'
import PROFILE_DATA from 'src/const/data/PROFILE_DATA'

interface ProfileProps {
  title: string
  data: any
}

export default function ProfileScreen ({ navigation }) {
  return (
    <Container bgColor="#fff">
      <IconButton
        icon="pencil"
        style={{
          position: 'absolute',
          right: 10
        }}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Avatar.Image
        size={75}
        source={{ uri: 'http://picsum.photos/seed/picsum/200/300' }}
        style={{ alignSelf: 'center', marginTop: 20 }}
      />

      <Divider style={{ marginVertical: 20 }} />

      {
        PROFILE_DATA.map((item, index) => (
          <>
            <ProfileData title={item.title} data={item.data} key={index} />
            <Divider />
          </>
        ))
      }
    </Container>
  )
}

function ProfileData ({ title, data }: ProfileProps) {
  return (
    <VStack gap="20px">
      <Typography
        size="lg"
        weight="bold"
      >
       {title}
      </Typography>

      {
        data?.map((item: any, index: number) => (
          <HStack align="center" key={index}>
            <Typography
              size="md"
              weight="bold"
              style={{
                minWidth: 150
              }}
            >
              {item?.label}
            </Typography>
            <Typography
              style={{
                flex: 1
              }}
            >
              {item?.value}
            </Typography>
          </HStack>
        ))
      }
    </VStack>
  )
}
