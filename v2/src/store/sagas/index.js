import { takeEvery } from 'redux-saga/effects';
import * as actionsTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga } from './auth';

export function* watchAuth() {
	yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
	yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
	yield takeEvery(actionsTypes.AUTH_USER, authUserSaga);
}
