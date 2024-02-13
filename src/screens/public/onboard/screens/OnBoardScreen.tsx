import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {PublicStackScreenProps} from '../../../../features/navigation/public/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../../features/hooks/hooks';
import {setUser} from '../../../../features/stores/user';

type Props = PublicStackScreenProps<'OnBoard'> & {};

const OnBoardScreen: React.FC<Props> = ({}) => {
  // #region members
  const dispatch = useAppDispatch();
  // #endregion
  // #region states
  // #endregion
  // #region custom hooks
  // #endregion
  // #region functions
  const onNavigate = () => dispatch(setUser({name: 'erjon'}));
  // #endregion
  // #region effects
  // #endregion
  // #region variables
  // #endregion
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <Button title="Sign in" onPress={onNavigate} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

OnBoardScreen.displayName = 'OnBoardScreen';

const styles = StyleSheet.create({
  safe: {flex: 1},
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
