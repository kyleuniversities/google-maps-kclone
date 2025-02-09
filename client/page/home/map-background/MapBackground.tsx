// Use Client
"use client";

// Imports
import { CSSProperties, useState } from "react";
import styles from "./MapBackground.module.css";

// Parameters Interface
interface MapBackgroundParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MapBackground({
  className = "",
  style = {},
}: MapBackgroundParameters) {
  // Use State Constants
  const [active, setActive] = useState<boolean>(false);

  // Handler Methods
  const handleMouseClick = () => {
    setActive(true);
  };

  const handleMouseClickRelease = () => {
    setActive(false);
  };

  // XML Parameters
  const backgroundSrc = `/site/mock-background${active ? "-active" : ""}.png`;
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <div className={`${styles["image"]} ${className}`} />
      <div
        className={`${styles["image-cover"]} ${active ? styles["active"] : ""} ${className}`}
        onMouseDown={handleMouseClick}
        onMouseUp={handleMouseClickRelease}
      />
    </div>
  );
}
