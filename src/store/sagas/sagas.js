import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALL_REQUEST } from '../actions/asyncActions'

// watcher saga
// listens the API_CALL_REQUEST actions

export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga) // Listen the action and start the worker saga
}

// its call from watcher saga , does the login and dispaches any action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        const { token } = response.data
        yield put({
            type: action.payload.okAction,
            payload: {
                token
            }
        })
    } catch (err) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: err
            }
        })
    }
}

export const fetchHttp = (request) => {
    return function () {
        return (axios(request))
    }
}
