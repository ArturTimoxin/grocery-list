import React from 'react';
import {
  AddIcon,
  Button,
  ButtonIcon,
  HStack,
  RemoveIcon,
  Text,
} from '@gluestack-ui/themed';
import { CounterProps } from './Counter.types';

export const Counter = React.memo(({ value, onChange }: CounterProps) => {
  return (
    <HStack space="lg" alignItems="center">
      <Button
        onPress={() => onChange(value - 1)}
        action="primary"
        variant="link"
      >
        <ButtonIcon as={RemoveIcon} />
      </Button>
      <Text>{value}</Text>
      <Button
        onPress={() => onChange(value + 1)}
        action="primary"
        variant="link"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonIcon as={AddIcon} />
      </Button>
    </HStack>
  );
});
