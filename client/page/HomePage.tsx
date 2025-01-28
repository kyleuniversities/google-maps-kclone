// Imports
import { CSSProperties } from "react";
import styles from "./HomePage.module.css";

// Parameters Interface
interface HomePageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function HomePage({
  className = "",
  style = {},
}: HomePageParameters) {
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
      HomePage
    </div>
  );
}
