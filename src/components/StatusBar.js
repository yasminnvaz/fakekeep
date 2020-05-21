import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';

export default () => {
  const theme = useContext(ThemeContext);

  return <StatusBar barStyle={theme.BAR_STYLE} />;
};
