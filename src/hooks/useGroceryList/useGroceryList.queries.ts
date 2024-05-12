import axios from 'axios';
import { GroceryListItem } from './useGroceryList.types';

axios.defaults.baseURL = 'http://192.168.0.105:3000';

export const getGroceryList = async (): Promise<GroceryListItem[]> => {
  const list = await axios.get('/grocery-list');
  return list.data;
};

export const editGroceryListItem = async (data: GroceryListItem) => {
  return await axios.patch(`/grocery-list/${data.id}`, data);
};

export const deleteGroceryListItem = async (id: string) => {
  return await axios.delete(`/grocery-list/${id}`);
};
