import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ProtectedStackParamList = {
  Root: NavigatorScreenParams<DrawerParamList> | undefined;
};

export type DrawerParamList = {
  Contracts: undefined;
  Profile: undefined;
  Feed: undefined;
};

export type PrivateStackScreenProps<
  Screen extends keyof ProtectedStackParamList,
> = NativeStackScreenProps<ProtectedStackParamList, Screen>;

export type PrivateScreenProps<Screen extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, Screen>,
    NativeStackScreenProps<ProtectedStackParamList>
  >;
