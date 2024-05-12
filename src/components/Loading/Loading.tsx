import React from 'react';
import { Center, Spinner } from '@gluestack-ui/themed';

export const Loading = () => {
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  );
};
