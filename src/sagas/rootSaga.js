import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import walletsListSaga from './wallets/walletsListSaga';
import createWalletSaga from './wallets/createWalletSaga';

import txsSaga from './wallet/txsSaga';
import balancesSaga from './wallet/balancesSaga';
import transferFundsSaga from './wallet/transferFundsSaga';

import signInSaga from './auth/signInSaga';
import signUpSaga from './auth/signUpSaga';
import resetPasswordSaga from './auth/resetPasswordSaga';

export default function* () {
  yield all([
    fork(formActionSaga),

    fork(walletsListSaga),
    fork(createWalletSaga),

    fork(txsSaga),
    fork(balancesSaga),
    fork(transferFundsSaga),

    fork(signInSaga),
    fork(signUpSaga),
    fork(resetPasswordSaga)
  ]);
}
