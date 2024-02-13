import React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {DrawerParamList} from '../types';
import ProfileScreen from '../../../../screens/protected/profile';
import ContractsScreen from '../../../../screens/protected/a.contracts/screen/ContractsScreen';
import DrawerContent from '../../components/content';

const DrawerStack = () => {
  // #region members
  const Drawer = createDrawerNavigator<DrawerParamList>();
  // #endregion
  // #region states
  // #endregion
  // #region custom hooks
  // #endregion
  // #region functions
  const drawerContent = (props: DrawerContentComponentProps) => {
    return <DrawerContent {...{props}} />;
  };
  // #endregion
  // #region effects
  // #endregion
  // #region variables
  // #endregion
  return (
    <Drawer.Navigator
      {...{drawerContent}}
      screenOptions={{
        drawerStyle: {width: '80%'},
      }}>
      <Drawer.Screen name="Contracts" component={ContractsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

DrawerStack.displayName = 'DrawerStack';
