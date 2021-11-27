import { useAppDispatch, useAppSelector } from '../state';
import auth from '@react-native-firebase/auth';
import {
  getUser,
  login,
  logout,
  register,
  setCurrentUser,
} from '../state/auth/auth.actions';
import { LoginData, RegisterData } from '../state/auth/auth.types';

const useAuth = () => {
  const { currentUserId, user, loading } = useAppSelector(
    state => state.authReducer,
  );

  const dispatch = useAppDispatch();

  const registerUser = (payload: RegisterData) => dispatch(register(payload));
  const loginUser = (payload: LoginData) => dispatch(login(payload));
  const saveCurrentUser = (payload: string | undefined) =>
    dispatch(setCurrentUser(payload));

  const getUserData = () => dispatch(getUser());

  const logoutUser = () => {
    auth().signOut();
    dispatch(logout());
  };

  return {
    register: registerUser,
    login: loginUser,
    logout: logoutUser,
    saveCurrentUser,
    getUserData,
    user,
    currentUserId,
    loading,
  };
};

export default useAuth;
