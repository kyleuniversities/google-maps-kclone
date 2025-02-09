// Imports
import { CSSProperties } from "react";
import styles from "./LayersBox.module.css";

// Parameters Interface
interface LayersBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LayersBox({
  className = "",
  style = {},
}: LayersBoxParameters) {
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
      LayersBox
    </div>
  );
}