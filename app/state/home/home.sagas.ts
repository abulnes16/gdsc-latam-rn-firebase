import Actions from './home.types';

import { takeLatest } from 'redux-saga/effects';

function* fetchGDSCSaga() {
  yield takeLatest(Actions.FETCH_GDSC, fetchGDSC);
}

function* fetchGDSC() {
  // TODO: Implement firebase firestore reading
}

export default [fetchGDSCSaga];
