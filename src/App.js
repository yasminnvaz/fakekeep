import 'react-native-gesture-handler';

import React, { useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProviderContext } from './ThemeProvider'
import MainStack from './routes/MainStack'

export default () => {
  const { theme } = useContext(ThemeProviderContext);

  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  )
};