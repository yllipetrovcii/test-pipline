import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStacks from './public';
import {useAppSelector} from '../hooks/hooks';
import ProtectedStacks from './protected';

type navigationFlowType = Record<number, React.JSX.Element>;

const Navigation = () => {
  // #region members
  const user = useAppSelector(state => state.user);
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
  const navigationFlow: navigationFlowType = {
    0: <PublicStacks />,
    1: <ProtectedStacks />,
  };
  // #endregion
  return (
    <NavigationContainer>
      {navigationFlow[user.currentUser === undefined ? 0 : 1]}
    </NavigationContainer>
  );
};

export default Navigation;

Navigation.displayName = 'Navigation';
