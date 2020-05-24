import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeContext} from 'styled-components';
import Icon from 'react-native-ionicons';

import NotesScreen from '../screens/NotesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default () => {
  const theme = useContext(ThemeContext);

  const tabBarOptions = {
    activeTintColor: theme.ACTIVE_TEXT_COLOR,
    inactiveTintColor: theme.INACTIVE_TEXT_COLOR,
    style: {
      backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
      borderTopWidth: 0,
      padding: 12,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({color}) => {
      let iconName;

      switch (route.name) {
        case 'Home':
          iconName = 'home-sharp';
          break;
        case 'Settings':
          iconName = 'settings-sharp';
          break;
        case 'New note':
          iconName = 'add-circle-sharp';
          break;
      }

      return <Icon name={iconName} size={20} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={NotesScreen} />
        <Tab.Screen name="New note" component={CreateNoteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
