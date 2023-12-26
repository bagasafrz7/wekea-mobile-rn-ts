import { SafeAreaView } from 'react-native'
import React, { type ReactNode } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

interface CustomSafeAreaProps {
  children: ReactNode
}

export default function CustomSafeArea ({ children }: CustomSafeAreaProps) {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyle}>
      {children}
    </SafeAreaView>
  )
}
