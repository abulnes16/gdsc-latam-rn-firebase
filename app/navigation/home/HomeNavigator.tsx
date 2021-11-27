import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DETAILS_SCREEN, HOME_SCREEN } from '../screen-name';
import { DetailsScreen, HomeScreen } from '../../screens';

type DrawerParamsList = {
  [HOME_SCREEN]: undefined;
  [DETAILS_SCREEN]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={DETAILS_SCREEN} component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
