// Imports
import { CSSProperties } from "react";
import styles from "./LocationSearchBar.module.css";
import SearchBar from "../util/search/SearchBar";
import SvgIcon from "../util/svg/SvgIcon";
import { RIGHT_TURN_SVG_PATH } from "@/resource/svg";

// Parameters Interface
interface LocationSearchBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LocationSearchBar({
  className = "",
  style = {},
}: LocationSearchBarParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} flex-center`}
      style={containerStyle}
    >
      <SearchBar />
      <div className={styles["icon-container"]}>
        <SvgIcon size={24}>{RIGHT_TURN_SVG_PATH}</SvgIcon>
      </div>
    </div>
  );
}
