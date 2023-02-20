import { fork, all } from 'redux-saga/effects';
import { loginSagas } from '../../app/sagas/loginSaga';

const sagas = function* () {
    yield all([...loginSagas]);
};

export default sagas;
