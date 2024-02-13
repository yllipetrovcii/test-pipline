/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import {Text as DefaultText, View as DefaultView} from 'react-native';

import {
  SafeAreaView as DefaultSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import useTheme from '../../features/hooks/useTheme';
import themedStyle from '../../resources/styles/styles.main';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type CustomSafeAreaViewProps = ThemeProps & SafeAreaViewProps;

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof themedStyle.light.colors &
    keyof typeof themedStyle.dark.colors,
) {
  const {colorScheme} = useTheme();

  const theme = colorScheme();

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return themedStyle[theme].colors[colorName];
  }
}

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function SafeAreaView(props: CustomSafeAreaViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return (
    <DefaultSafeAreaView style={[{backgroundColor}, style]} {...otherProps} />
  );
}
