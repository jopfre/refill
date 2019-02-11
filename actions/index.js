import { GET_MARKERS } from './types';

export const getMarkers = () => {
	const markers = {latitude: 51.4545, longitude: -2.5879}
	console.log('get markers called');
	return ({
	  type: GET_MARKERS,
	  payload: markers
	});
};