import Config from 'react-native-config';
import { MutationFunction } from '@tanstack/react-query';
import axios from 'axios';
import { GroceryListItem } from './useGroceryList.types';

axios.defaults.baseURL = Config.API_URL;

export const getGroceryList = async (): Promise<GroceryListItem[]> => {
  const list = await axios.get('/grocery-list');
  return list.data;
};

export const addGroceryListItem = async (
  data: Pick<GroceryListItem, 'title' | 'amount'>,
) => {
  await axios.post('/grocery-list', {
    ...data,
    id: Date.now(),
    checked: false,
  });
};

export const editGroceryListItem: MutationFunction<
  GroceryListItem,
  GroceryListItem
> = async (variables: GroceryListItem) => {
  return await axios.put(`/grocery-list/${variables.id}`, variables);
};

export const deleteGroceryListItem = async (id: number) => {
  return await axios.delete(`/grocery-list/${id}`);
};
