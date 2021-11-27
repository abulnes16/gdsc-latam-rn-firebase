import React, { useEffect } from 'react';
import { useAuth } from '../hooks';
import auth from '@react-native-firebase/auth';
import AuthNavigator from './auth/AuthNavigator';
import HomeNavigator from './home/HomeNavigator';

const MainNavigator = () => {
  const { currentUserId, saveCurrentUser } = useAuth();

  useEffect(() => {
    const user = auth().currentUser;
    saveCurrentUser(user?.uid);
  }, []);

  // If the user is log in then we redirect to the home navigator
  if (currentUserId) {
    return <HomeNavigator />;
  }

  // Else redirect to the auth navigator
  return <AuthNavigator />;
};

export default MainNavigator;
