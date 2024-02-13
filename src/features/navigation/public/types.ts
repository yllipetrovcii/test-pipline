import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackParamList = {
  OnBoard: undefined;
  SignIn: {arg: string};
};

export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, Screen>;
