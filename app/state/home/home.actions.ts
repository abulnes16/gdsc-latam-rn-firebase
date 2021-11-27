/* Home Actions */

import { FetchGDSCAction, FETCH_GDSC } from './home.types';

export function fetchGDSC(): FetchGDSCAction {
  return {
    type: FETCH_GDSC,
  };
}
