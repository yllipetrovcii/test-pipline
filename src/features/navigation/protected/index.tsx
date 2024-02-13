import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProtectedStackParamList} from './types';
import DrawerStack from './drawer';

const Stack = createNativeStackNavigator<ProtectedStackParamList>();
const ProtectedStacks = () => {
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
      <Stack.Screen name="Root" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default ProtectedStacks;

ProtectedStacks.displayName = 'ProtectedStacks';
