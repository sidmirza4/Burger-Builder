import { takeEvery } from "redux-saga/effects";
import * as actionsTypes from "../actions/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";

export function* watchAuth() {
	yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
	yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}
