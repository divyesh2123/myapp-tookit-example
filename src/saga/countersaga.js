import { delay, put, takeLatest } from  'redux-saga/effects'
import { inc } from '../slice/couterslice';

function* inccountersaga()
{
    yield delay(1000);

    yield put(inc());

}

export function* watchersaga()
{

    yield takeLatest('INC_ASYNC',inccountersaga)

}

