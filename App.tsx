import React from 'react'
import Routes from './src/routes'
import CustomSafeArea from './src/components/CustomArea'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <CustomSafeArea>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </CustomSafeArea>
  )
}

export default App
