import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddIcon, Fab, FabIcon, FabLabel } from '@gluestack-ui/themed';
import { ADD_ITEM_SCREEN_ROUTE, RootStackNavigationProp } from '@navigation';
import { useNavigation } from '@react-navigation/native';

export const AddItemButton = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { t } = useTranslation();
  return (
    <Fab
      size="md"
      bgColor="$success500"
      placement="bottom center"
      onPress={() => navigate(ADD_ITEM_SCREEN_ROUTE)}
      isHovered={false}
      isDisabled={false}
      isPressed={false}
      marginBottom="$10"
    >
      <FabIcon as={AddIcon} mr="$1" />
      <FabLabel>{t('listScreen.addButton')}</FabLabel>
    </Fab>
  );
};
