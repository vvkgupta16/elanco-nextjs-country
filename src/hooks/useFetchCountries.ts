import { useState, useEffect } from "react";
import { Country } from "@/types/country";

export function useFetchCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const cachedCountries = localStorage.getItem("countries");

        if (cachedCountries) {
          setCountries(JSON.parse(cachedCountries));
        } else {
          const res = await fetch("https://restcountries.com/v3.1/all");
          const data = await res.json();
          setCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      } catch (error) {
        setError(`Error fetching countries.${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
}
