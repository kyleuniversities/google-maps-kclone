// Imports
import { CSSProperties } from "react";
import styles from "./MapsActivityPage.module.css";

// Parameters Interface
interface MapsActivityPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MapsActivityPage({
  className = "",
  style = {},
}: MapsActivityPageParameters) {
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
      MapsActivityPage
    </div>
  );
}