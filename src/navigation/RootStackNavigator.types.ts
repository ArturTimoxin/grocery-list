import { GroceryListItem } from '@hooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  ADD_ITEM_SCREEN_ROUTE,
  EDIT_ITEM_SCREEN_ROUTE,
  LIST_SCREEN_ROUTE,
} from './RootStackNavigator.constants';

export type RootStackParamList = {
  [ADD_ITEM_SCREEN_ROUTE]: undefined;
  [LIST_SCREEN_ROUTE]: undefined;
  [EDIT_ITEM_SCREEN_ROUTE]: GroceryListItem;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
