"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";

import CountryCard from "../components/CountryCard";

import SearchBar from "./SearchBar";

import LoadingScreen from "./Loading";

import NoDataScreen from "./Nodata";

import { useFetchCountries } from "../hooks/useFetchCountries";

export default function CountryDashboard() {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const [visibleCountries, setVisibleCountries] = useState<number>(10);

  const {countries, loading, error } = useFetchCountries()

  const region =[
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setVisibleCountries((prevVisible) => prevVisible + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCountries = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();
    return countries
      .filter((country) => {
        const countryName = country.name.common.toLowerCase();
        const capitalName = country.capital && country.capital.length > 0 ? country.capital[0].toLowerCase() : "";
        return countryName.includes(searchTermLower) || capitalName.includes(searchTermLower);
      })
      .filter((country) => selectedRegion === "All" || country.region === selectedRegion);
  }, [countries, searchTerm, selectedRegion]);

  const sortedCountries = useMemo(
    () => [...filteredCountries].sort((a, b) => a.population - b.population),
    [filteredCountries]
  );

  const handleRegionChange = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  if (loading) return <LoadingScreen />;

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Country Dashboard</h1>
      <div className="w-3/6 mb-2"><SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /></div>
      <div className="mb-4">
        <select
          onChange={(e) => handleRegionChange(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded text-black"
        >
          {
            region.map((item)=>{
              return <option value={item} key={item} >{item}</option>
            })
          }
        </select>
      </div>
      {filteredCountries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedCountries.slice(0, visibleCountries).map((country) => (
            <MemoizedCountryCard key={country.name.common} country={country} />
          ))}
        </div>
      ) : (
        <NoDataScreen />
      )}
    </div>
  );
}

const MemoizedCountryCard = React.memo(CountryCard);
