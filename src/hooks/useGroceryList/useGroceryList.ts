import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GROCERY_LIST_QUERY_KEY } from './useGroceryList.constants';
import {
  addGroceryListItem,
  deleteGroceryListItem,
  editGroceryListItem,
  getGroceryList,
} from './useGroceryList.queries';
import { GroceryListItem } from './useGroceryList.types';

export const useGroceryList = () => {
  const queryClient = useQueryClient();

  const groceryList = useQuery({
    queryKey: [GROCERY_LIST_QUERY_KEY],
    queryFn: getGroceryList,
  });

  const invalidateGroceryListQueries = () => {
    queryClient.invalidateQueries({
      queryKey: [GROCERY_LIST_QUERY_KEY],
    });
  };

  const createGroceryListItem = useMutation({
    mutationFn: addGroceryListItem,
    onSettled: invalidateGroceryListQueries,
  });

  const deleteGroceryListItemMutation = useMutation({
    mutationFn: deleteGroceryListItem,
    onSettled: invalidateGroceryListQueries,
  });

  const editGroceryListItemMutation = useMutation({
    mutationFn: editGroceryListItem,
    // Optimistically update to the new value
    onMutate: async newGroceryListItem => {
      await queryClient.cancelQueries({
        queryKey: [GROCERY_LIST_QUERY_KEY, newGroceryListItem.id],
      });
      const previousGroceryItem = queryClient.getQueryData([
        GROCERY_LIST_QUERY_KEY,
        newGroceryListItem.id,
      ]);

      queryClient.setQueryData(
        [GROCERY_LIST_QUERY_KEY, newGroceryListItem.id],
        newGroceryListItem,
      );
      return { previousGroceryItem, newGroceryListItem };
    },
    onError: (_err, _newGroceryListItem, context) => {
      queryClient.setQueryData(
        [GROCERY_LIST_QUERY_KEY, context?.newGroceryListItem.id],
        context?.previousGroceryItem,
      );
    },
    onSettled: (newGroceryListItem?: GroceryListItem) => {
      queryClient.invalidateQueries({
        queryKey: [GROCERY_LIST_QUERY_KEY, newGroceryListItem?.id],
      });
    },
  });

  return {
    groceryList,
    createGroceryListItem,
    deleteGroceryListItemMutation,
    editGroceryListItemMutation,
  };
};
