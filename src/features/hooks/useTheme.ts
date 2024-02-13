import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';
import themedStyle from '../../resources/styles/styles.main';

const useTheme = () => {
  // The useColorScheme value is always either light or dark, but the built-in
  // type suggests that it can be null. This will not happen in practice, so this
  // makes it a bit easier to work with.
  function colorScheme(): NonNullable<ColorSchemeName> {
    return _useColorScheme() as NonNullable<ColorSchemeName>;
  }

  const currentTheme = () => {
    const theme = colorScheme();
    return themedStyle[theme ?? 'light'];
  };

  const theme = currentTheme();
  return {theme, colorScheme};
};

export default useTheme;
