import rsf from './rsf'

import { fork } from 'redux-saga/effects'

import { getMarkers } from './actions'

export default function * rootSaga () {
  yield fork(
    rsf.database.sync,
    'markers',
    { successActionCreator: getMarkers }
  )
}