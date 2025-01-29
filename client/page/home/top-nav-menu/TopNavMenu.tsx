// Imports
import { CSSProperties } from "react";
import styles from "./TopNavMenu.module.css";

// Parameters Interface
interface TopNavMenuParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TopNavMenu({
  className = "",
  style = {},
}: TopNavMenuParameters) {
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
      TopNavMenu
    </div>
  );
}