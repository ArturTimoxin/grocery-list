import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { RootNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@assets/translations/i18n';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
