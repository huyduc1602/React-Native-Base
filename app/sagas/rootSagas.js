import { fork, all } from 'redux-saga/effects';
import { loginSaga } from '../../app/sagas/loginSaga';
import { alertSaga } from '../../app/sagas/alertSaga';

const sagas = function* () {
    yield all([...loginSaga]);
    yield all([...alertSaga]);
};

export default sagas;
