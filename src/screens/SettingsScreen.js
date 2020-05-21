import React, { useContext, useState } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

import { ThemeProviderContext } from '../ThemeProvider'
import ViewContainer from '../containers/ViewContainer'
import styled from 'styled-components'

const SettingsRow = styled(View)`
    background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border-radius: 10px;
`

const SettingsText = styled(Text)`
    padding: 0;
    color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

export default () => {

    const { setTheme, theme } = useContext(ThemeProviderContext);
    const [isEnabled, setIsEnabled] = useState(true);

    const changeTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
        setIsEnabled(previousState => !previousState)
    };

    const label = theme === 'lightTheme' ? 'Modo Claro' : 'Modo Escuro';

    return (
        <ViewContainer>
            <SettingsRow>
                <SettingsText>{label}</SettingsText>
                <Switch onChange={changeTheme} value={isEnabled} />
            </SettingsRow>
        </ViewContainer>
    );
}