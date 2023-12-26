import React from 'react'
import { SafeAreaView } from 'react-native'
import GlobalStyles from './src/styles/GlobalStyles'
import Routes from './src/routes'

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyle}>
      <Routes />
    </SafeAreaView>
  )
}

export default App
