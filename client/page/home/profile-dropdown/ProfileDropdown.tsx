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
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      <img
        src="/site/profile-pic-example.png"
        style={{
          margin: "10px",
          width: "45px",
          borderRadius: "1000px",
          border: "1px solid rgb(150,150,150)",
        }}
      />
    </div>
  );
}
