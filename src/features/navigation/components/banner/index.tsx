import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProfilePicture from '../../../../components/user/ProfilePicture';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalLogOut from '../../../../components/buttons/horizontal-logout';
import UserCredentials from '../credentials';
import {spaces} from '../../../../resources/layout';

type Props = {};
const UserBanner: React.FC<Props> = ({}) => {
  // #region members
  // #endregion
  // #region states
  // #endregion
  // #region custom hooks
  const {top} = useSafeAreaInsets();
  // #endregion
  // #region functions
  // #endregion
  // #region effects
  // #endregion
  // #region variables
  // #endregion
  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <ProfilePicture
        {...{
          source: null, // 'https://avatars.githubusercontent.com/u/27153649?v=4',
          displayName: 'Mario Rossi',
        }}
      />
      <UserCredentials />
      <HorizontalLogOut />
    </View>
  );
};

export default UserBanner;

UserBanner.displayName = 'UserBanner';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spaces.regular,
    gap: spaces.small,
  },
});
