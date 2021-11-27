import { useAppDispatch, useAppSelector } from '../state';
import { login, register } from '../state/auth/auth.actions';
import { LoginData, RegisterData } from '../state/auth/auth.types';

const useAuth = () => {
  const { currentUserId, user } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  const registerUser = (payload: RegisterData) => dispatch(register(payload));
  const loginUser = (payload: LoginData) => dispatch(login(payload));

  return {
    register: registerUser,
    login: loginUser,
    user,
    currentUserId,
  };
};

export default useAuth;
