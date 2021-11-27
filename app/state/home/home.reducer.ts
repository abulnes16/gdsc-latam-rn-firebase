import {
  FETCH_GDSC,
  FETCH_GDSC_FAILED,
  FETCH_GDSC_SUCCESS,
  HomeActions,
} from './home.types';

const INITIAL_STATE: HomeState = {
  gdsc: [],
  loading: false,
  error: false,
  errorMessage: '',
  errorTitle: '',
};

export default function reducer(
  state = INITIAL_STATE,
  action: HomeActions,
): HomeState {
  switch (action.type) {
    case FETCH_GDSC:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GDSC_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        gdsc: action.payload.gdsc,
      };
    }

    case FETCH_GDSC_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}
