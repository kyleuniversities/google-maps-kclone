// Imports
import { CSSProperties } from "react";
import styles from "./LiveTrafficPanel.module.css";

// Parameters Interface
interface LiveTrafficPanelParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LiveTrafficPanel({
  className = "",
  style = {},
}: LiveTrafficPanelParameters) {
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
      LiveTrafficPanel
    </div>
  );
}