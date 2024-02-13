import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../../features/hooks/hooks';
import {clearUser} from '../../../features/stores/user';

type Props = {};
const HorizontalLogOut: React.FC<Props> = ({}) => {
  // #region members
  // #endregion
  // #region states
  // #endregion
  // #region custom hooks
  const dispatch = useAppDispatch();
  // #endregion
  // #region functions
  const onLogOut = () => dispatch(clearUser());
  // #endregion
  // #region effects
  // #endregion
  // #region variables
  // #endregion
  return (
    <TouchableOpacity style={styles.root} onPress={onLogOut}>
      <Text style={styles.label}>Logout</Text>
    </TouchableOpacity>
  );
};

export default HorizontalLogOut;

HorizontalLogOut.displayName = 'HorizontalLogOut';

const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'center'},
  label: {color: 'white', fontWeight: '600'},
});
