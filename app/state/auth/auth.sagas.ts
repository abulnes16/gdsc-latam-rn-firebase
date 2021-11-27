/* Auth Sagas Module */

import { takeLatest, put, select } from 'redux-saga/effects';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import Actions, { LoginAction, RegisterAction } from './auth.types';
import { collections } from '../../constants';
import { Alert } from 'react-native';

const authRef = auth();
const firestoreRef = firestore();

function* registerSaga() {
  yield takeLatest(Actions.REGISTER, register);
}

function* register(action: RegisterAction) {
  // TODO: Implement firebase auth registration
  try {
    const { email, name, password } = action.payload;
    const userCredentials: FirebaseAuthTypes.UserCredential =
      yield authRef.createUserWithEmailAndPassword(email, password);
    if (userCredentials.user) {
      const timestamp = firestore.FieldValue.serverTimestamp();
      const { user } = userCredentials;
      const data = {
        email,
        name,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
      yield firestoreRef.collection(collections.USERS).doc(user.uid).set(data);

      Alert.alert('User created', 'The user was created successfully');

      yield put({
        type: Actions.REGISTER_SUCCESS,
        payload: {
          user: data,
          currentUserId: user.uid,
        },
      });
    }
  } catch (e) {
    const registerError = e as Error;
    Alert.alert(
      'Registration failed',
      "We couldn't create the user, please try again",
    );
    yield put({
      type: Actions.REGISTER_FAILED,
      payload: {
        errorTitle: 'Registration error',
        errorMessage: registerError.message,
        error: true,
      },
    });
  }
}

function* loginSaga() {
  yield takeLatest(Actions.LOG_IN, login);
}

function* login(action: LoginAction) {
  // TODO: Implement firebase auth login
  console.log(action);
  try {
    const { email, password } = action.payload;
    const currentUser: FirebaseAuthTypes.UserCredential =
      yield authRef.signInWithEmailAndPassword(email, password);

    if (currentUser.user) {
      const { user } = currentUser;
      const userData: FirebaseFirestoreTypes.DocumentSnapshot<User> =
        yield firestoreRef.collection(collections.USERS).doc(user.uid).get();

      yield put({
        type: Actions.LOG_IN_SUCCESS,
        payload: {
          currentUserId: user.uid,
          user: userData.data(),
        },
      });
    }
  } catch (e) {
    const loginError = e as Error;
    Alert.alert('Login failed', 'Check your email or password');
    yield put({
      type: Actions.LOG_IN_FAILED,
      payload: {
        errorTitle: 'Login failed',
        errorMessage: loginError.message,
        error: true,
      },
    });
  }
}

function* getUserSaga() {
  yield takeLatest(Actions.GET_USER_DATA, getUser);
}

function* getUser() {
  const { currentUserId }: AuthState = yield select(state => state.authReducer);

  try {
    const result: FirebaseFirestoreTypes.DocumentSnapshot<User> =
      yield firestoreRef.collection(collections.USERS).doc(currentUserId).get();

    const user = result.data() as User;

    yield put({
      type: Actions.GET_USER_DATA_SUCCESS,
      payload: user,
    });
  } catch (error) {
    const userError = error as Error;
    yield put({
      type: Actions.GET_USER_DATA_FAILED,
      payload: {
        errorTitle: 'Fetch data failed',
        errorMessage: userError.message,
      },
    });
  }
}

export default [registerSaga, loginSaga, getUserSaga];
