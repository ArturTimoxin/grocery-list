import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { BackButton } from '@components';
import { Text } from '@gluestack-ui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddItemScreen, ListScreen } from '@screens';
import {
  ADD_ITEM_SCREEN_ROUTE,
  LIST_SCREEN_ROUTE,
} from './RootStackNavigator.constants';
import { RootStackParamList } from './RootStackNavigator.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { t } = useTranslation();

  const headerTitle = useCallback(({ children }: { children: string }) => {
    return <Text fontWeight="$bold">{children}</Text>;
  }, []);

  const headerLeft = useCallback(() => {
    return <BackButton />;
  }, []);

  return (
    <Stack.Navigator initialRouteName={LIST_SCREEN_ROUTE}>
      <Stack.Screen
        options={{
          title: t('listScreen.title'),
          headerTitle: headerTitle,
        }}
        name={LIST_SCREEN_ROUTE}
        component={ListScreen}
      />
      <Stack.Screen
        options={{
          title: t('addItemScreen.title'),
          headerTitle,
          headerLeft,
          headerBackVisible: false,
        }}
        name={ADD_ITEM_SCREEN_ROUTE}
        component={AddItemScreen}
      />
    </Stack.Navigator>
  );
};
