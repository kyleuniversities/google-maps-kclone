// Imports
import { CSSProperties } from "react";
import styles from "./SearchMenu.module.css";

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
    ...style
  }

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{className}}}`}
      style={containerStyle}
    >
      SearchMenu
    </div>
  );
}