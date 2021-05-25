import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import FirstScreen from '../Screens/FirstScreen'
import SignupScreen from '../Screens/SignupScreen'
import LoginScreen from '../Screens/LoginScreen'
import StartedScreen from '../Screens/StartedScreen'





const Stack = createStackNavigator();


function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="StartedScreen"
                    component={StartedScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainStackNavigator;