// Imports
import { CSSProperties } from "react";
import styles from "./MapEditPage.module.css";

// Parameters Interface
interface MapEditPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MapEditPage({
  className = "",
  style = {},
}: MapEditPageParameters) {
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
      MapEditPage
    </div>
  );
}