// Imports
import { CSSProperties } from "react";
import styles from "./MapControlsPage.module.css";

// Parameters Interface
interface MapControlsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MapControlsPage({
  className = "",
  style = {},
}: MapControlsPageParameters) {
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
      MapControlsPage
    </div>
  );
}