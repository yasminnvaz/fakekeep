import React, { useContext } from 'react'
import { ThemeProviderContext } from './ThemeProvider'
import { SafeAreaView } from 'react-navigation';

import CustomButton from './components/CustomButton'

export default () => {
  const { theme } = useContext(ThemeProviderContext);

  return (
    <>
      <SafeAreaView>
        <CustomButton text={"Start"} />
      </SafeAreaView>
    </>
  )
};