import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PublicStackScreenProps} from '../../../../features/navigation/public/types';

type Props = PublicStackScreenProps<'SignIn'> & {};

const SignInScreen: React.FC<Props> = ({route}) => {
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
  // #region actions
  // #endregion
  return (
    <View style={styles.root}>
      <Text>{route.params.arg}</Text>
    </View>
  );
};

export default SignInScreen;

SignInScreen.displayName = 'SignInScreen';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
