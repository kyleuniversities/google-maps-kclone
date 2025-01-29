// Imports
import { CSSProperties } from "react";
import styles from "./SearchMenu.module.css";
import SearchBar from "@/component/util/search/SearchBar";
import LocationSearchBar from "@/component/app/LocationSearchBar";

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
