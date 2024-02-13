import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {extractInitials} from '../../utils/common';

type Props = {
  source: string | null;
  displayName: string;
  size?: number;
};

const ProfilePicture: React.FC<Props> = ({source, displayName, size = 50}) => {
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
  const displayedOption = {
    0: (
      <Image
        source={{uri: source!}}
        style={[styles.image, {height: size, width: size}]}
      />
    ),
    1: <Text style={styles.initialText}>{extractInitials(displayName)}</Text>,
  };
  // #endregion
  return (
    <View style={[styles.root, {height: size, width: size}]}>
      {displayedOption[source !== null ? 0 : 1]}
    </View>
  );
};

export default ProfilePicture;

ProfilePicture.displayName = 'ProfilePicture';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    aspectRatio: 1,
    height: 50,
    width: 50,
    overflow: 'hidden',
  },
  initialText: {color: 'red', fontWeight: '500', fontSize: 18},
  image: {flex: 1, height: 50, width: 50},
});
