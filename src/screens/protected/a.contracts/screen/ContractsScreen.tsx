import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../../features/hooks/hooks';
import {View as Root} from '../../../../components/themed';

type Props = {};

const ContractsScreen: React.FC<Props> = ({}) => {
  // #region members
  const user = useAppSelector(state => state.user.currentUser);
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
    <Root style={styles.root}>
      <Text>Welcome {user?.name}</Text>
    </Root>
  );
};

export default ContractsScreen;

ContractsScreen.displayName = 'ContractsScreen';

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
