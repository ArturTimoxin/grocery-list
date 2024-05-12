import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Loading } from '@components';
import { GroceryListItem, useGroceryList } from '@hooks';
import { AddItemButton, EmptyState, ListItem } from './components';
import { styles } from './ListScreen.styles';

export const ListScreen = () => {
  const { groceryList } = useGroceryList();

  const renderItem: ListRenderItem<GroceryListItem> = ({ item }) => (
    <ListItem item={item} />
  );

  if (groceryList.isLoading) return <Loading />;

  return (
    <>
      <FlatList
        data={groceryList.data}
        renderItem={renderItem}
        keyExtractor={(item: GroceryListItem) => item.id}
        ListEmptyComponent={EmptyState}
        contentContainerStyle={styles.flatListContentContainerStyle}
      />
      <AddItemButton />
    </>
  );
};
