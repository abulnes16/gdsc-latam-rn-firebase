/* Home Action Types */

export const FETCH_GDSC = 'HOME/FETCH/GDSC';
export const FETCH_GDSC_SUCCESS = 'HOME/FETCH/GDSC/SUCCESS';
export const FETCH_GDSC_FAILED = 'HOME/FETCH/GDSC/FAILED';

export type FetchGDSCAction = {
  type: typeof FETCH_GDSC;
};

export type FetchGDSCSuccessAction = {
  type: typeof FETCH_GDSC_SUCCESS;
  payload: {
    gdsc: GDSC[];
  };
};

export type HomeFailedAction = {
  type: typeof FETCH_GDSC_FAILED;
  payload: ErrorState;
};

export type HomeActions =
  | FetchGDSCAction
  | FetchGDSCSuccessAction
  | HomeFailedAction;

export default {
  FETCH_GDSC,
  FETCH_GDSC_SUCCESS,
  FETCH_GDSC_FAILED,
};
