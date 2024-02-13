export type tTheme = {
  dark: boolean;
  colors: tColors;
};

type tColors = {
  primary: string;
  onPrimary: string;
  background: string;
  onBackground: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  error: string;
  inactive: string;
  disabled: string;
  onDisabled: string;
};
