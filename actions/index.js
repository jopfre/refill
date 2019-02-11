import { GET_MARKERS } from './types';

export const getMarkers = (markers) => {
	return ({
	  type: GET_MARKERS,
	  payload: markers
	});
};
