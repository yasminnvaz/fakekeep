import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-ionicons'

import NotesScreen from '../screens/NotesScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CreateNoteScreen from '../screens/CreateNoteScreen'

const Tab = createBottomTabNavigator();

export default () => {
    const theme = useContext(ThemeContext)

    const tabBarOptions = {
        activeTintColor: theme.ACTIVE_TEXT_COLOR,
        inactiveTintColor: theme.INACTIVE_TEXT_COLOR,
    }

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen
                    name="Home"
                    options={{ tabBarIcon: (icon) => <Icon name="home-sharp" size={18} color={icon.tintColor} /> }}
                    component={NotesScreen} />
                <Tab.Screen
                    name="New Note"
                    options={{ tabBarIcon: (icon) => <Icon name="add-circle-sharp" size={18} color={icon.tintColor} /> }}
                    component={CreateNoteScreen} />
                <Tab.Screen
                    name="Settings"
                    options={{ tabBarIcon: (icon) => <Icon name="settings-sharp" size={18} color={icon.tintColor} /> }}
                    component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}