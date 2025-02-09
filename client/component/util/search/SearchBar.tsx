// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

// Parameters Interface
interface SearchBarParameters {
  className?: string;
  style?: CSSProperties;
  value?: string;
  setValue?: (value: string) => void;
}

// Export Component
export default function SearchBar({
  className = "",
  style = {},
  value = "",
  setValue = () => {},
}: SearchBarParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <input
      className={`${styles["container"]} ${className}`}
      placeholder="Search Google Maps KClone"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
