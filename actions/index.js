import { GET_MARKERS, ADD_MARKER, SET_CENTER } from './types';

export const getMarkers = (markers) => {
	return ({
	  type: GET_MARKERS,
	  payload: markers
	});
};

export const addMarker = (marker) => {
	console.log('action', marker)
	return ({
	  type: ADD_MARKER,
	  payload: marker
	});
};

export const setCenter = (coordinates) => {
	return ({
	  type: SET_CENTER,
	  payload: coordinates
	});
};
