import React from 'react';
import { Counter } from '@components';
import {
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckIcon,
  HStack,
  Text,
} from '@gluestack-ui/themed';
import { useGroceryList } from '@hooks';
import { ListItemProps } from './ListItem.types';

export const ListItem = ({ item }: ListItemProps) => {
  const { editGroceryListItemMutation } = useGroceryList();

  const onCountChange = (newAmount: number) => {
    editGroceryListItemMutation.mutate({
      ...item,
      amount: newAmount,
    });
  };

  const onChangeCheck = (checked: boolean) => {
    editGroceryListItemMutation.mutate({
      ...item,
      checked,
    });
  };

  return (
    <Box p="$3">
      <HStack space="md" justifyContent="space-between">
        <Checkbox
          aria-label="checkbox"
          value={`${item.checked}`}
          isChecked={item.checked}
          onChange={onChangeCheck}
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <HStack flex={1} alignItems="center">
          <Text strikeThrough={item.checked}>{item.title}</Text>
        </HStack>
        <Counter onChange={onCountChange} value={item.amount} />
      </HStack>
    </Box>
  );
};
