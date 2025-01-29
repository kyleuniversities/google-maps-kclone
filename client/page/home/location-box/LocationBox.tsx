// Imports
import { CSSProperties } from "react";
import styles from "./LocationBox.module.css";

// Parameters Interface
interface LocationBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LocationBox({
  className = "",
  style = {},
}: LocationBoxParameters) {
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
      LocationBox
    </div>
  );
}