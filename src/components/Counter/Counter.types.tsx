import React from 'react';

export type CounterProps = {
  value: number;
  onChange: (newValue: number) => void;
  children?: React.ReactNode;
};
