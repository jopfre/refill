import { GET_MARKERS } from './types';

export const getMarkers = () => {
	const markers = [
		{ id: 0, title: "Coffee Shop", coordinates: { latitude: 51.4545, longitude: -2.5879 } },
		{ id: 1, title: "Restaurant",  coordinates: { latitude: 51.4535, longitude: -2.5859 } }
	]
	return ({
	  type: GET_MARKERS,
	  payload: markers
	});
};