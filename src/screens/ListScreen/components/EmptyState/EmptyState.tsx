import React from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Text } from '@gluestack-ui/themed';

export const EmptyState = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Center height="$full">
      <Text fontWeight="$bold">{t('listScreen.emptyState')}</Text>
    </Center>
  );
});
