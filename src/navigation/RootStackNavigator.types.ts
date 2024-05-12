import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  ADD_ITEM_SCREEN_ROUTE,
  LIST_SCREEN_ROUTE,
} from './RootStackNavigator.constants';

export type RootStackParamList = {
  [ADD_ITEM_SCREEN_ROUTE]: undefined;
  [LIST_SCREEN_ROUTE]: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
