import {
  AuthActions,
  GET_USER_DATA,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  LOGOUT,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  SET_CURRENT_USER,
} from './auth.types';

const INITIAL_STATE: AuthState = {
  user: null,
  currentUserId: undefined,
  loading: false,
  error: false,
};

export default function reducer(
  state = INITIAL_STATE,
  action: AuthActions,
): AuthState {
  switch (action.type) {
    case REGISTER:
    case LOG_IN:
    case GET_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS: {
      const { user, currentUserId } = action.payload;
      return {
        ...state,
        user,
        currentUserId,
        loading: false,
        error: false,
      };
    }
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      };
    }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUserId: action.payload,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        currentUserId: action.payload.currentUserId,
        loading: false,
        error: false,
      };

    case LOGOUT:
      return {
        ...state,
        currentUserId: undefined,
        user: null,
      };
    case REGISTER_FAILED:
    case LOG_IN_FAILED:
    case GET_USER_DATA_FAILED: {
      const { errorMessage, errorTitle } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorTitle,
        errorMessage,
      };
    }
    default:
      return state;
  }
}
