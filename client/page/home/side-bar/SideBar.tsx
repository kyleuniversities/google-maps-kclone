// Imports
import { CSSProperties } from "react";
import styles from "./SideBar.module.css";

// Parameters Interface
interface SideBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SideBar({
  className = "",
  style = {},
}: SideBarParameters) {
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
      SideBar
    </div>
  );
}