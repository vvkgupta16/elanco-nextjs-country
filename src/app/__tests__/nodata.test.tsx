import { render, screen } from '@testing-library/react';
import LoadingScreen from '../../components/Nodata';
import React from 'react';

test('LoadingScreen renders correctly', async() => {
  render(<LoadingScreen />);

  const loadingText = await screen.findAllByText("It seems we couldn't find any data matching your criteria.");
  expect(loadingText).toHaveLength(1); 
});
