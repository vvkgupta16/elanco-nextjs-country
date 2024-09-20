"use client";
import { useDarkMode } from "../hooks/useDarkMode";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const { isDarkMode: darkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  if (isDarkMode === null) return null;

  return (
    <div className="flex items-center justify-end space-x-4 p-5">
      <span>Dark Mode</span>
      <div className="relative inline-block w-11 h-5">
        <input
          checked={isDarkMode}
          onChange={toggleDarkMode}
          id="switch-component"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>

      <Button
        onClick={() => router.push("/compareCompany")}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        Start Comparison with Two Countries
      </Button>
    </div>
  );
};

export default DarkModeToggle;
