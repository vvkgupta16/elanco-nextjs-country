import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryComparison from '../../components/CountryComparison';
import { Country } from '../../types/country'; // Assuming you have a Country type

jest.mock('react-chartjs-2', () => ({
  Bar: () => <div data-testid="bar-chart">Bar Chart</div>
}));

describe('CountryComparison Component', () => {
  const country1: Country = {
    name: { common: 'India' },
    population: 8654622,
    area: 41284,
    maps: {
      googleMaps: 'https://goo.gl/maps/uVuZcXaxSx5jLyEC9',
      openStreetMap: 'https://www.openstreetmap.org/relation/51701'
    },
    // Other required fields of Country type with default values
    // Add more fields as required by your Country type
    tld: ['.in'],
    cca2: 'IN',
    ccn3: '356',
    cca3: 'IND',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: { INR: { name: 'Indian Rupee', symbol: '₹' } },
    idd: { root: '+91', suffixes: [] },
    capital: ['New Delhi'],
    altSpellings: ['India'],
    region: 'Asia',
    languages: { hin: 'Hindi', eng: 'English' },
    translations: {},
    latlng: [20.5937, 78.9629],
    landlocked: false,
    demonyms: { eng: { f: 'Indian', m: 'Indian' } },
    timezones: ['UTC+5:30'],
    continents: ['Asia'],
    flags: { png: 'https://flagcdn.com/w320/in.png', svg: 'https://flagcdn.com/in.svg' },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: { latlng: [28.6139, 77.209] },
    flag: '',
    car: {
      signs: [],
      side: ''
    }
  };

  const country2: Country = { ...country1 };

  it('renders CountryCard components correctly', async () => {
    render(<CountryComparison country1={country1} country2={country2} />);

    const items = await screen.findAllByText('India');
    expect(items).toHaveLength(2); 
  });
});
