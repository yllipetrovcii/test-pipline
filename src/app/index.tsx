import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '../features/stores';
import {persistStore} from 'redux-persist';

type Props = {};
const MainApp: React.FC<PropsWithChildren<Props>> = ({children}) => {
  // #region actions
  persistStore(store);
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
    <Provider store={store}>
      <SafeAreaProvider style={styles.root}>{children}</SafeAreaProvider>
    </Provider>
  );
};

export default MainApp;

MainApp.displayName = 'MainApp';

const styles = StyleSheet.create({root: {flex: 1}});
