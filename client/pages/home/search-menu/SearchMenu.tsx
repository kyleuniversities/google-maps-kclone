// Imports
import { CSSProperties } from "react";
import styles from "./SearchMenu.module.css";
import SearchBar from "@/components/util/search/SearchBar";
import LocationSearchBar from "@/components/app/LocationSearchBar";

// Parameters Interface
interface SearchMenuParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SearchMenu({
  className = "",
  style = {},
}: SearchMenuParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      <LocationSearchBar />
    </div>
  );
}
