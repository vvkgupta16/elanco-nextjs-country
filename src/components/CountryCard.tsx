import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Country } from "@/types/country";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <div className="relative w-full h-32 mb-2">
        <Image
          src={country.flags?.png || '/default-flag.png'}
          alt={country.name?.common || 'Country Flag'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <h2 className="text-xl font-semibold">{country.name?.common}</h2>
      <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
      <p><strong>Population:</strong> {country.population?.toLocaleString() || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region || 'N/A'}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages ?? {}).join(', ') || 'N/A'}</p>
      <p><strong>Currency:</strong> {Object.values(country.currencies ?? {}).map((c) => `${c.name} (${c.symbol})`).join(', ') || 'N/A'}</p>
      <p><strong>Timezone:</strong> {country.timezones?.join(', ') || 'N/A'}</p>
      <p><strong>Area:</strong> {country.area?.toLocaleString() || 'N/A'} km²</p>
      <p><strong>Maps:</strong> 
        <a href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a>, 
        <a href={country.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer">OpenStreetMaps</a>
      </p>
      <Link href={`/countryDetail?countryName=${encodeURIComponent(country.name?.common)}`}>
        <span className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition cursor-pointer">
          More Information
        </span>
      </Link>
    </div>
  );
};

export default CountryCard;
