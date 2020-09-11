import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* logoutSaga(action) {
	yield localStorage.removeItem('token');
	yield localStorage.removeItem('expirationDate');
	yield localStorage.removeItem('userId');

	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
}

export function* authUserSaga(action) {
	yield put(actions.authStart());
	const authData = {
		email: action.email,
		password: action.password,
		returnSecureToken: true,
	};

	let url =
		'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBQOm6eHRGSXwWW5_Q3ulnOZ0H4tMsIr4';
	if (!action.isSignup) {
		url =
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBQOm6eHRGSXwWW5_Q3ulnOZ0H4tMsIr4';
	}
	try {
		const response = yield axios.post(url, authData);
		console.log(response);
		const expirationDate = yield new Date(
			new Date().getTime() + response.data.expiresIn * 1000
		);
		yield localStorage.setItem('token', response.data.idToken);
		yield localStorage.setItem('expirationDate', expirationDate);
		yield localStorage.setItem('userId', response.data.localId);
		yield put(
			actions.authSuccess(response.data.idToken, response.data.localId)
		);
		yield put(actions.checkAuthTimeout(response.data.expiresIn));
	} catch (error) {
		console.log(error);
		yield put(actions.authFail(error.response.data.error));
	}
}
