import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddIcon, Fab, FabIcon, FabLabel } from '@gluestack-ui/themed';
import { ADD_ITEM_SCREEN_ROUTE, RootStackNavigationProp } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AddItemButton.styles';

export const AddItemButton = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { t } = useTranslation();
  return (
    <Fab
      size="md"
      bgColor="$green600"
      placement="bottom center"
      style={styles.fab}
      onPress={() => navigate(ADD_ITEM_SCREEN_ROUTE)}
      isHovered={false}
      isDisabled={false}
      isPressed={false}
    >
      <FabIcon as={AddIcon} mr="$1" />
      <FabLabel>{t('listScreen.addButton')}</FabLabel>
    </Fab>
  );
};
