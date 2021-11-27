import React from 'react';
import { useAuth } from '../hooks';
import AuthNavigator from './auth/AuthNavigator';
import HomeNavigator from './home/HomeNavigator';

const MainNavigator = () => {
  const { currentUserId } = useAuth();
  console.log(currentUserId);

  // If the user is log in then we redirect to the home navigator
  if (currentUserId) {
    return <HomeNavigator />;
  }

  // Else redirect to the auth navigator
  return <AuthNavigator />;
};

export default MainNavigator;
