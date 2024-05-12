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

export const Counter = React.memo(
  ({ value, children, onChange }: CounterProps) => {
    const onChangeValue = (newValue: number) => {
      if (newValue <= 0) return;
      onChange(newValue);
    };

    return (
      <HStack space="lg" alignItems="center">
        <Button
          onPress={() => onChangeValue(value - 1)}
          action="primary"
          variant="link"
          isDisabled={value <= 1}
        >
          <ButtonIcon as={RemoveIcon} />
        </Button>
        {children || (
          <Text minWidth="$5" textAlign="center">
            {value}
          </Text>
        )}
        <Button
          onPress={() => onChangeValue(value + 1)}
          action="primary"
          variant="link"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonIcon as={AddIcon} />
        </Button>
      </HStack>
    );
  },
);
