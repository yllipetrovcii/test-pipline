import {StyleSheet} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserBanner from '../banner';
import {spaces} from '../../../../resources/layout';

type Props = {
  props: DrawerContentComponentProps;
};
const DrawerContent: React.FC<Props> = ({props}) => {
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
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <UserBanner />
      <DrawerContentScrollView
        {...props}
        bounces={false}
        contentContainerStyle={styles.drawerScroll}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;

DrawerContent.displayName = 'DrawerContent';

const styles = StyleSheet.create({
  safe: {flex: 1},
  root: {},
  userContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spaces.regular,
    gap: spaces.small,
  },

  drawerScroll: {
    flexGrow: 1,
    paddingTop: 0,
  },
});
