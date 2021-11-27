import { StackScreenProps } from '@react-navigation/stack';

declare global {
  type AuthParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
  };

  type DrawerParamsList = {
    HomeScreen: undefined;
    DetailsScreen: undefined;
  };
}

/* Navigation Types */
export type LoginScreenProps = StackScreenProps<AuthParamList, 'LoginScreen'>;
