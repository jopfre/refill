import rsf from './rsf'

import { fork, takeEvery, call} from 'redux-saga/effects'

import { getMarkers, addMarker } from './actions'


function* getMarkersSaga() { 
	yield fork(
    rsf.database.sync,
    'markers',
    { successActionCreator: getMarkers }
   )
}

function* addMarkerSaga({ values, resolve, reject }) { 
	yield call(rsf.database.create, 'markers', {
		title: values.name,
		coordinates: {
			latitude: parseFloat(values.latitude),
			longitude: parseFloat(values.longitude)
		}
	})
}

export default function* rootSaga () {
	yield fork(getMarkersSaga)
	// yield takeEvery('GET_MARKERS', getMarkersSaga)
	yield takeEvery('ADD_MARKER', addMarkerSaga)
}