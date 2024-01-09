import React from 'react'
import Routes from './src/routes'
import CustomSafeArea from './src/components/CustomArea'
import { PaperProvider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <CustomSafeArea>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </PaperProvider>
    </CustomSafeArea>
  )
}

export default App
