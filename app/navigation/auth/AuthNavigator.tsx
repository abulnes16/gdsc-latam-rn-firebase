import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../../screens';
import { LOGIN_SCREEN, REGISTER_SCREEN } from '../screen-name';

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
