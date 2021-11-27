import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import React from 'react';
import { SafeAreaView } from 'react-native';
import MainNavigator from './app/navigation/MainNavigator';
import { globalStyles } from './app/theme';

const App = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={globalStyles.screen}>
          <MainNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
