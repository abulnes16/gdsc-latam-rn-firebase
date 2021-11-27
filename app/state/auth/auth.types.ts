/* Auth Action Types */

export const REGISTER = 'AUTH/REGISTER';
export const REGISTER_SUCCESS = 'AUTH/REGISTER/SUCCESS';
export const REGISTER_FAILED = 'AUTH/REGISTER/FAILED';
export const LOG_IN = 'AUTH/LOG_IN';
export const LOG_IN_SUCCESS = 'AUTH/LOG_IN/SUCCESS';
export const LOG_IN_FAILED = 'AUTH/LOG_IN/FAILED';
export const LOGOUT = 'AUTH/LOG_OUT';
export const SET_CURRENT_USER = 'AUTH/CURRENT_USER';

export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterAction = {
  type: typeof REGISTER;
  payload: RegisterData;
};

export type RegisterSuccessAction = {
  type: typeof REGISTER_SUCCESS;
  payload: {
    user: string;
    currentUserId: string;
  };
};

export type SetCurrentUserAction = {
  type: typeof SET_CURRENT_USER;
  payload: string;
};

export type LoginAction = {
  type: typeof LOG_IN;
  payload: LoginData;
};

export type LoginSuccessAction = {
  type: typeof LOG_IN_SUCCESS;
  payload: {
    currentUserId: string;
  };
};

export type LogoutAction = {
  type: typeof LOGOUT;
};

export type AuthActionFailed = {
  type: typeof REGISTER_FAILED | typeof LOG_IN_FAILED;
  payload: ErrorState;
};

export type AuthActions =
  | RegisterAction
  | RegisterSuccessAction
  | LoginAction
  | LoginSuccessAction
  | LogoutAction
  | SetCurrentUserAction
  | AuthActionFailed;

export default {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOGOUT,
  SET_CURRENT_USER,
};
