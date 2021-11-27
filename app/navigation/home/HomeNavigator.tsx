import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DETAILS_SCREEN, HOME_SCREEN } from '../screen-name';
import { DetailsScreen, HomeScreen } from '../../screens';
import { DrawerContent } from '../../components';
import { useAuth } from '../../hooks';

type DrawerParamsList = {
  [HOME_SCREEN]: undefined;
  [DETAILS_SCREEN]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

const HomeNavigator = () => {
  const { user, logout, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContent {...props} logout={logout} user={user} />
      )}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={DETAILS_SCREEN} component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
