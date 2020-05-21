import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {createContext} from 'react';
import themes from './styles/themes';
import App from './App';

const DEFAULT_THEME = 'darkTheme';

export const ThemeProviderContext = createContext({
  setTheme: () => {},
  theme: DEFAULT_THEME,
});

const Providers = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return (
    <ThemeProviderContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themes[theme]}>
        <App />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default Providers;
