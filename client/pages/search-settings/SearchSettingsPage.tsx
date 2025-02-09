// Imports
import { CSSProperties } from "react";
import styles from "./SearchSettingsPage.module.css";

// Parameters Interface
interface SearchSettingsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SearchSettingsPage({
  className = "",
  style = {},
}: SearchSettingsPageParameters) {
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
      SearchSettingsPage
    </div>
  );
}