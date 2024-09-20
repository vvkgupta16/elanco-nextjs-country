'use client'

import React, { useState } from 'react';

import Select from 'react-select';

import CountryComparisonChart from '@/components/CountryComparison';

import { Country } from '@/types/country';

import { useFetchCountries } from '@/hooks/useFetchCountries';

import LoadingScreen from '@/components/Loading';

const CountryComparisonPage: React.FC = () => {

  const [selectedCountry1, setSelectedCountry1] = useState<Country | null>(null);

  const [selectedCountry2, setSelectedCountry2] = useState<Country | null>(null);

  const { countries, loading, error } =  useFetchCountries();


  const countryOptions = countries.map((country) => ({
    value: country.name?.common,
    label: country.name?.common,
    country
  }));

  if (loading) return <LoadingScreen />;

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Compare Countries</h1>
      <div className="flex gap-4 mb-4 text-black">
        <Select
          options={countryOptions}
          onChange={(selected) => setSelectedCountry1(selected?.country || null)}
          placeholder="Select Country 1"
        />
        <Select
          options={countryOptions}
          onChange={(selected) => setSelectedCountry2(selected?.country || null)}
          placeholder="Select Country 2"
        />
      </div>
      {selectedCountry1 && selectedCountry2 ? (
        <CountryComparisonChart
          country1={selectedCountry1}
          country2={selectedCountry2}
        />
      ) : (
        <p>Please select two countries to compare.</p>
      )}
    </div>
  );
};

export default CountryComparisonPage;
