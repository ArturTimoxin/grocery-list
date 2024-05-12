import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GROCERY_LIST_QUERY_KEY } from './useGroceryList.constants';
import {
  deleteGroceryListItem,
  editGroceryListItem,
  getGroceryList,
} from './useGroceryList.queries';

export const useGroceryList = () => {
  const queryClient = useQueryClient();

  const groceryList = useQuery({
    queryKey: [GROCERY_LIST_QUERY_KEY],
    queryFn: getGroceryList,
  });

  const invalidateGroceryListQueries = () => {
    queryClient.invalidateQueries({ queryKey: [GROCERY_LIST_QUERY_KEY] });
  };

  const deleteGroceryListItemMutation = useMutation({
    mutationFn: deleteGroceryListItem,
    onSuccess: invalidateGroceryListQueries,
  });

  const editGroceryListItemMutation = useMutation({
    mutationFn: editGroceryListItem,
    onSuccess: invalidateGroceryListQueries,
  });

  return {
    groceryList,
    deleteGroceryListItemMutation,
    editGroceryListItemMutation,
  };
};
