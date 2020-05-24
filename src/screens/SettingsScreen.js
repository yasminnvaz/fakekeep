import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

import {ThemeProviderContext} from '../ThemeProvider';
import ViewContainer from '../components/ViewContainer';
import styled from 'styled-components';
import Header from '../components/Header';

const SettingsContainer = styled(View)`
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.SECONDARY_BACKGROUND_COLOR};
`;

const SettingsRow = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const SettingsText = styled(Text)`
  padding: 0;
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
`;

export default () => {
  const {setTheme, theme} = useContext(ThemeProviderContext);
  const [isEnabled, setIsEnabled] = useState(true);

  const changeTheme = () => {
    setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
    setIsEnabled((previousState) => !previousState);
  };

  const label = theme === 'lightTheme' ? 'Light mode' : 'Dark mode';

  return (
    <ViewContainer>
      <Header title={'Settings'} />
      <SettingsContainer>
        <SettingsRow>
          <SettingsText>{label}</SettingsText>
          <Switch onChange={changeTheme} value={isEnabled} />
        </SettingsRow>
      </SettingsContainer>
    </ViewContainer>
  );
};
