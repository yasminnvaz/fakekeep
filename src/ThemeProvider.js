import React, { createContext, useState } from 'react'
import * as themes from './styles/theme'
import { ThemeProvider } from 'styled-components'
import App from './App'

const { darkTheme } = themes

export const ThemeProviderContext = createContext({
    setTheme: () => { },
    theme: darkTheme
})

const Providers = () => {
    const [theme, setTheme] = useState(darkTheme)

    return (
        <ThemeProviderContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themes[theme]}>
                <App />
            </ThemeProvider>
        </ThemeProviderContext.Provider>
    )
}

export default Providers