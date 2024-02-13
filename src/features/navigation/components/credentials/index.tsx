import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};
const UserCredentials: React.FC<Props> = ({}) => {
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
    <View style={styles.root}>
      <Text style={styles.text}>User ID</Text>
      <Text numberOfLines={1} style={[styles.text, styles.name]}>
        MarioRossi
      </Text>
    </View>
  );
};

export default UserCredentials;

UserCredentials.displayName = 'UserCredentials';

const styles = StyleSheet.create({
  root: {flex: 1},
  text: {color: 'white', fontSize: 14},
  name: {fontSize: 20, fontWeight: 'bold'},
});
