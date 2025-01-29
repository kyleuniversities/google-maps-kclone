// Imports
import { CSSProperties } from "react";
import styles from "./ProfileDropdown.module.css";

// Parameters Interface
interface ProfileDropdownParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ProfileDropdown({
  className = "",
  style = {},
}: ProfileDropdownParameters) {
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
      ProfileDropdown
    </div>
  );
}