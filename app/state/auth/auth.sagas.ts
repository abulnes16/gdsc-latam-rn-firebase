/* Auth Sagas Module */

import { takeLatest } from 'redux-saga/effects';
import Actions, { LoginAction, RegisterAction } from './auth.types';

function* registerSaga() {
  yield takeLatest(Actions.REGISTER, register);
}

function* register(action: RegisterAction) {
  // TODO: Implement firebase auth registration
  console.log(action);
}

function* loginSaga() {
  yield takeLatest(Actions.LOG_IN, login);
}

function* login(action: LoginAction) {
  // TODO: Implement firebase auth login
  console.log(action);
}

export default [registerSaga, loginSaga];
