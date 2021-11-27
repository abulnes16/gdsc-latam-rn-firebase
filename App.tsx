import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './app/navigation/MainNavigator';
import store from './app/state';
import { globalStyles } from './app/theme';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={globalStyles.screen}>
            <MainNavigator />
          </SafeAreaView>
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
