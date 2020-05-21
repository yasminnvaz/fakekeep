import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" options={{ title: "Home", }} component={HomeScreen} />
                <Stack.Screen name="NotesScreen" options={{ title: "Notes" }} component={NotesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}