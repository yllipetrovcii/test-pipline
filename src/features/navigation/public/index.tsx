import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../../../screens/public/sign-in';
import {OnBoardScreen} from '../../../screens/public/onboard';
import {PublicStackParamList} from './types';

const Stack = createNativeStackNavigator<PublicStackParamList>();

const PublicStacks = () => {
  // #region members
  // #endregion
  // #region states
  // #endregion
  // #region custom hooks
  // #endregion
  // #region functions
  // #endregion
  // #region effects
  // #endregion
  // #region variables
  // #endregion
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default PublicStacks;

PublicStacks.displayName = 'PublicStacks';
