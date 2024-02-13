import {tTheme} from '../../features/domain/types/t.theme';

type Style = Record<string, tTheme>;

const light: tTheme = {
  dark: false,
  colors: {
    primary: '',
    onPrimary: '',
    background: '',
    card: '',
    text: 'black',
    border: '',
    notification: 'rgb(255, 69, 58)',
    error: '',
    inactive: '',
    disabled: '',
    onDisabled: '',
    onBackground: '',
  },
};

const dark: tTheme = {
  dark: true,
  colors: {
    primary: '',
    onPrimary: '',
    background: '',
    card: '',
    text: 'black',
    border: '',
    notification: 'rgb(255, 69, 58)',
    error: '',
    inactive: '',
    disabled: '',
    onDisabled: '',
    onBackground: '',
  },
};

const themedStyle: Style = {light, dark};

export default themedStyle;
