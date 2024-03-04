import Container from '@components/Global/Container'
import { HStack } from '@components/Global/HStack'
import Typography from '@components/Global/Typography'
import { VStack } from '@components/Global/VStack'
import React from 'react'
import { ScrollView } from 'react-native'
import { Avatar, List } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { menuData } from 'src/const/MenuScreen'
import styled from 'styled-components/native'

const MenuItems = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  gap: 10px;
`

export default function MenuScreen () {
  return (
    <ScrollView>
      <Container bgColor="#fff">
        <HStack justify='space-between' align='center'>
          <HStack gap="10px" align="center">
            <Avatar.Image size={50} source={{ uri: 'http://picsum.photos/700' }} />

            <VStack>
              <Typography size="lg" weight="bold">
                Jhon Dee
              </Typography>
              <Typography size="sm" color="secondary">
                Tangerang, Indonesia
              </Typography>
            </VStack>
          </HStack>

          <Ionicons name="settings-outline" size={18} color="black" />
        </HStack>

        {
          menuData.map((menu, index) => (
            <VStack key={index} gap="10px">
              <Typography size="md" weight="bold">
                {menu.title}
              </Typography>

              {
                menu.menuItems.map((item, i) => (
                  <List.Item
                    key={i}
                    left={() => {
                      return (
                        <MenuItems>
                          <Ionicons name={item.icon} size={18} color="black" />
                          <Typography>
                            {item.title}
                          </Typography>
                        </MenuItems>
                      )
                    }}
                    title=""
                  />
                ))
              }
            </VStack>
          ))
        }
      </Container>
    </ScrollView>
  )
}
