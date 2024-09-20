import { render, screen } from '@testing-library/react';
import LoadingScreen from '../../components/Loading';
import React from 'react';

test('LoadingScreen renders correctly', async() => {
  render(<LoadingScreen />);

  const loadingText = await screen.findAllByText('Loading...');
  expect(loadingText).toHaveLength(1); 
});
