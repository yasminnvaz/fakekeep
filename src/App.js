import React, { useContext } from 'react'
import { ThemeProviderContext } from './ThemeProvider'
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';

import CustomButton from './components/CustomButton'

export default () => {
  const { setTheme, theme } = useContext(ThemeProviderContext);

  return (
    <>
      <SafeAreaView>
        <CustomButton text={"Start"} />
      </SafeAreaView>
    </>
  )
};