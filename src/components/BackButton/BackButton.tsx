import React from 'react';
import { ArrowLeftIcon, Button, ButtonIcon } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export const BackButton = React.memo(() => {
  const { goBack } = useNavigation();
  return (
    <Button
      size="md"
      variant="link"
      action="secondary"
      onPress={goBack}
      $android-marginRight="$4"
    >
      <ButtonIcon as={ArrowLeftIcon} />
    </Button>
  );
});
