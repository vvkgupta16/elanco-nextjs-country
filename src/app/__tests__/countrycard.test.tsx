import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '../../components/CountryCard';
import React from 'react';
import { Country } from '../../types/country'; 

describe('CountryCard Component', () => {
  const mockCountry: Country = {
    name: { common: 'Testland', official: 'Testland' },
    tld: ['.tl'],
    cca2: 'TL',
    ccn3: '001',
    cca3: 'TLS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      TST: {
        name: 'Test Dollar',
        symbol: 'T$'
      }
    },
    idd: {
      root: '+1',
      suffixes: ['23']
    },
    capital: ['Test City'],
    altSpellings: ['Testland'],
    region: 'Test Region',
    languages: { tst: 'Testish' },
    translations: {
      spa: {
        official: 'Testland',
        common: 'Testlandia'
      }
    },
    latlng: [0, 0],
    landlocked: false,
    area: 50000,
    demonyms: {
      eng: { f: 'Testlander', m: 'Testlander' }
    },
    flags: {
      png: '/test-flag.png',
      svg: '/test-flag.svg'
    },
    coatOfArms: {},
    maps: {
      googleMaps: 'https://maps.google.com/?q=Testland',
      openStreetMap: 'https://openstreetmap.org/?q=Testland'
    },
    population: 1000000,
    car: { signs: ['TST'], side: 'right' },
    timezones: ['UTC+0'],
    continents: ['Test Continent'],
    startOfWeek: 'monday',
    capitalInfo: { latlng: [0, 0] },
    flag: ''
  };


  it('renders map links correctly (using CountryTest)', () => {
    const { getByText }: RenderResult = render(<CountryCard country={mockCountry} />);

    const googleMapsLink = getByText((content, element) => {
      return element!.tagName.toLowerCase() === 'a' && content.includes('Google Maps');
    });
    expect(googleMapsLink).toBeInTheDocument();
    expect(googleMapsLink.closest('a')!.getAttribute('href')).toBe(mockCountry.maps.googleMaps);
  });


  it('renders map links correctly (using Country)', () => {
    const { getByText }: RenderResult = render(<CountryCard country={mockCountry} />);

    const googleMapsLink = getByText((content, element) => {
      return element!.tagName.toLowerCase() === 'a' && content.includes('Google Maps');
    });
    expect(googleMapsLink).toBeInTheDocument();
    expect(googleMapsLink.closest('a')!.getAttribute('href')).toBe(mockCountry.maps.googleMaps);
  });
});
