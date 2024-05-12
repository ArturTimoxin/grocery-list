import * as React from 'react';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { RootNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import '@assets/translations/i18n';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
