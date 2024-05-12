import React from 'react';
import { AddItemButton, EmptyState } from './components';

export const ListScreen = () => {
  return (
    <>
      <EmptyState />
      <AddItemButton />
    </>
  );
};
