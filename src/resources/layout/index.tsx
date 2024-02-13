import {Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const window = {
  width: windowDimensions.width,
  height: windowDimensions.height,
};

const screen = {
  width: screenDimensions.width,
  height: screenDimensions.height,
};

// #region screen scaling helpers
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(window.width * window.height) / 100;
const scale = (size: number) => (window.width / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (window.height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.1) =>
  size + (scale(size) - size) * factor;
// #endregion

// Main spaces object
const spaces = {
  microscopic: moderateScale(1),
  minuscule: moderateScale(2),
  tiny: moderateScale(4),
  petite: moderateScale(6),
  small: moderateScale(8),
  compact: moderateScale(10),
  medium: moderateScale(12),
  moderate: moderateScale(14),
  regular: moderateScale(16),
  large: moderateScale(20),
  big: moderateScale(32),
  massive: moderateScale(64),
};

export {
  window,
  screen,
  spaces,
  scale,
  verticalScale,
  moderateScale,
  screenSize,
};
