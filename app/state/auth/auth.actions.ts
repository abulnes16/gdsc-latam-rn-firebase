/* Auth Actions */

import {
  GetUserAction,
  GET_USER_DATA,
  LoginAction,
  LoginData,
  LOGOUT,
  LogoutAction,
  LOG_IN,
  REGISTER,
  RegisterAction,
  RegisterData,
  SetCurrentUserAction,
  SET_CURRENT_USER,
} from './auth.types';

export function register(payload: RegisterData): RegisterAction {
  return {
    type: REGISTER,
    payload,
  };
}

export function login(payload: LoginData): LoginAction {
  return {
    type: LOG_IN,
    payload,
  };
}

export function setCurrentUser(
  payload: string | undefined,
): SetCurrentUserAction {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
}

export function getUser(): GetUserAction {
  return {
    type: GET_USER_DATA,
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT,
  };
}
