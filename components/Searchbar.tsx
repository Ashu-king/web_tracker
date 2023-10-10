"use client";
import React, { useState, FormEvent } from "react";
const isValidAmazon = (url: string) => {
  try {
    const parseUrl = new URL(url);
    const hostname = parseURL.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};
export const Searchbar = () => {
  const [searchPromt, setSearchPrompt] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const IsvalidLink = isValidAmazon(searchPromt);
    alert(IsvalidLink ? "valid Link" : "Invalid link");
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPromt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};
