
import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import CountryDashboard from '../../components/CountryDashboard';

import { useFetchCountries } from '../../hooks/useFetchCountries';

jest.mock('../../hooks/useFetchCountries');

const mockCountries = [
  {
    name: { common: 'India' },
    population: 1393409038,
    region: 'Asia',
    capital: ['New Delhi'],
  },
  {
    name: { common: 'Switzerland' },
    population: 8654622,
    region: 'Europe',
    capital: ['Bern'],
  },
  {
    name: { common: 'Australia' },
    population: 25687041,
    region: 'Oceania',
    capital: ['Canberra'],
  },
  {
    name: { common: 'Nigeria' },
    population: 206139589,
    region: 'Africa',
    capital: ['Abuja'],
  },
  {
    name: { common: 'Canada' },
    population: 37742154,
    region: 'Americas',
    capital: ['Ottawa'],
  }
];

describe('CountryDashboard Component', () => {
  beforeEach(() => {
    (useFetchCountries as jest.Mock).mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });
  });


  it('renders CountryCard components correctly', async () => {
    render(<CountryDashboard />);

    const indiaCards = await screen.findAllByText('India');
    expect(indiaCards).toHaveLength(1); 

    const countryCards = await screen.findAllByRole('heading', { level: 2 });
    expect(countryCards).toHaveLength(mockCountries.length); 
  });


  it('filters countries based on region selection', async () => {
    render(<CountryDashboard />);

    const regionSelect = screen.getByRole('combobox');
    fireEvent.change(regionSelect, { target: { value: 'Asia' } });

    await waitFor(() => {
      const asiaCountryCards = screen.getAllByRole('heading', { level: 2 });
      expect(asiaCountryCards).toHaveLength(1);
    });
  });


  it('increases visible countries on scroll', async () => {
    render(<CountryDashboard />);

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    await waitFor(() => {
      const countryCards = screen.getAllByRole('heading', { level: 2 });
      expect(countryCards.length).toBeGreaterThan(4);
    });
  });
});
