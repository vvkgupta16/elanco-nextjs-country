import { render, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';
import React from 'react';

test('SearchBar renders correctly and handles input change', () => {
  const mockOnSearchChange = jest.fn();

  render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);

  const input = screen.getAllByPlaceholderText(/Search by country name or capital/i)
  
  expect(input).toHaveLength(1);
});
