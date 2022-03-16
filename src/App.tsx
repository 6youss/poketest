import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './navigation/Router';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
