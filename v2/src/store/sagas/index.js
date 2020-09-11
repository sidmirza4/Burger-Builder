import { takeEvery } from 'redux-saga/effects';
import * as actionsTypes from '../actions/actionTypes';
import {
	logoutSaga,
	checkAuthTimeoutSaga,
	authUserSaga,
	authCheckStateSaga,
} from './auth';

import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga } from './order';

export function* watchAuth() {
	yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
	yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
	yield takeEvery(actionsTypes.AUTH_USER, authUserSaga);
	yield takeEvery(actionsTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
	yield takeEvery(actionsTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
	yield takeEvery(actionsTypes.PURCHASE_BURGER, purchaseBurgerSaga);
}
