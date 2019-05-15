import React from 'react';
import { MapComponent } from '../components/MapComponent';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	// const navigation = { navigate: jest.fn() };
  const tree = renderer.create(<MapComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
