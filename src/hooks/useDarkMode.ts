'use client';

import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("dark-mode");
      return storedMode ? JSON.parse(storedMode) : false;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return { isDarkMode, toggleDarkMode };
}
