import React, { useContext } from 'react'
import { StatusBar } from "react-native";
import { ThemeProviderContext } from '../ThemeProvider';

export default () => {

    const { theme } = useContext(ThemeProviderContext)

    return <StatusBar barStyle={theme.BAR_STYLE} />
}