
import React from 'react';

import CountryCard from './CountryCard';

import { Country } from '@/types/country';

import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CountryComparisonProps {
  country1: Country;
  country2: Country;
}

const CountryComparison: React.FC<CountryComparisonProps> = ({ country1, country2 }) => {
  const chartData = {
    labels: ['Population', 'Area'],
    datasets: [
      {
        label: country1.name?.common,
        data: [country1.population || 0, country1.area || 0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: country2.name?.common,
        data: [country2.population || 0, country2.area || 0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };

  return (
    <div>
      <div className="flex gap-4">
        <CountryCard country={country1} />
        <CountryCard country={country2} />
      </div>
      <div className="mt-4">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default CountryComparison;
