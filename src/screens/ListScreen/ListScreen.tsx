import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Loading } from '@components';
import { Box, Divider, View } from '@gluestack-ui/themed';
import { GroceryListItem, useGroceryList } from '@hooks';
import { AddItemButton, EmptyState, ListItem } from './components';
import { styles } from './ListScreen.styles';

export const ListScreen = () => {
  const { groceryList } = useGroceryList();

  const renderItem: ListRenderItem<GroceryListItem> = useCallback(
    ({ item }) => (
      <ListItem
        id={item.id}
        title={item.title}
        amount={item.amount}
        checked={item.checked}
      />
    ),
    [],
  );

  if (groceryList.isLoading && !groceryList.data) return <Loading />;

  return (
    <Box flex={1} bg="$white">
      <FlatList
        data={groceryList.data}
        onRefresh={groceryList.refetch}
        refreshing={groceryList.isLoading}
        renderItem={renderItem}
        keyExtractor={(item: GroceryListItem) => `${item.id}`}
        ListEmptyComponent={EmptyState}
        ListFooterComponent={View}
        ListFooterComponentStyle={styles.listFooterComponent}
        ItemSeparatorComponent={Divider}
        contentContainerStyle={
          !groceryList.data?.length && styles.flatListContentContainerStyle
        }
      />
      <AddItemButton />
    </Box>
  );
};
