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
      isDisabled={false}
      isFocusVisible={false}
      onPress={goBack}
    >
      <ButtonIcon as={ArrowLeftIcon} />
    </Button>
  );
});
