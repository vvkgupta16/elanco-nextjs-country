import Image from "next/image";
import React from "react";
interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  capital?: string[];
  population?: number;
  region?: string;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  timezones?: string[];
  area?: number;
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
}

interface CountryDetailsProps {
  searchParams: {
    countryName: string;
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = async ({ searchParams }) => {
 
  const { countryName } = searchParams;

  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  
  const finalData: Country[] = await res.json(); 

  const country = finalData[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">{country.name?.common}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src={country.flags?.png}
            alt={country.name?.common}
            width={400}
            height={250}
            className="rounded-lg shadow-lg"
            
          />
        </div>

        <div className="space-y-4">
          <p className="text-lg">
            <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Population:</strong> {country.population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Region:</strong> {country.region || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Languages:</strong> {Object.values(country.languages ?? {}).join(", ") || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Currency:</strong>{" "}
            {Object.values(country.currencies ?? {})
              .map((c) => `${c.name} (${c.symbol})`)
              .join(", ") || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Timezone:</strong> {country.timezones?.join(", ") || "N/A"}
          </p>
          <p className="text-lg">
            <strong>Area:</strong> {country.area?.toLocaleString() || "N/A"} km²
          </p>

          <p className="text-lg">
            <strong>Maps:</strong>{" "}
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Google Maps
            </a>
            {", "}
            <a
              href={country.maps?.openStreetMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              OpenStreetMaps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
