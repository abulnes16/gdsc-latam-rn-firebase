import Actions from './home.types';

import { put, takeLatest } from 'redux-saga/effects';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { collections } from '../../constants';

const firestoreRef = firestore();

function* fetchGDSCSaga() {
  yield takeLatest(Actions.FETCH_GDSC, fetchGDSC);
}

function* fetchGDSC() {
  // TODO: Implement firebase firestore reading

  try {
    const gdsc: GDSC[] = [];
    const result: FirebaseFirestoreTypes.QuerySnapshot<GDSC> =
      yield firestoreRef.collection(collections.GDSC).get();

    if (result) {
      result.forEach(doc => {
        gdsc.push({ ...doc.data(), id: doc.id });
      });

      yield put({
        type: Actions.FETCH_GDSC_SUCCESS,
        payload: {
          gdsc,
        },
      });
    }
  } catch (e) {
    const fetchError = e as Error;
    yield put({
      type: Actions.FETCH_GDSC_FAILED,
      payload: {
        error: true,
        errorTitle: 'Fetch failed',
        errorMessage: fetchError.message,
      },
    });
  }
}

export default [fetchGDSCSaga];
