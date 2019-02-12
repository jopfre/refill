import { GET_MARKERS, ADD_MARKER } from './types';

export const getMarkers = (markers) => {
	return ({
	  type: GET_MARKERS,
	  payload: markers
	});
};

export const addMarker = (marker) => {
	return ({
	  type: ADD_MARKER,
	  payload: marker
	});
};