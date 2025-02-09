// Imports
import { CSSProperties } from "react";
import styles from "./StreetViewSymbolsPage.module.css";

// Parameters Interface
interface StreetViewSymbolsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function StreetViewSymbolsPage({
  className = "",
  style = {},
}: StreetViewSymbolsPageParameters) {
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
      StreetViewSymbolsPage
    </div>
  );
}