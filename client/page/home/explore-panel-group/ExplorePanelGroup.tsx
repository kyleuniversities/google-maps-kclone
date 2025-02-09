// Imports
import { CSSProperties } from "react";
import styles from "./ExplorePanelGroup.module.css";

// Parameters Interface
interface ExplorePanelGroupParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ExplorePanelGroup({
  className = "",
  style = {},
}: ExplorePanelGroupParameters) {
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
      ExplorePanelGroup
    </div>
  );
}