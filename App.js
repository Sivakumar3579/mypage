import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';


import MainStackNavigator from './src/Navigations/AppNaviagtion'
import SignupScreen from './src/Screens/SignupScreen'
import LoginScreen from './src/Screens/LoginScreen'
import StartedScreen from './src/Screens/StartedScreen'
import FirstScreen from './src/Screens/FirstScreen'


export default class App extends React.Component {
  render() {
    return (
      < MainStackNavigator />
    )
  }

};
