// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode, useState } from "react";
import styles from "./LabeledIconButton.module.css";
import BottomLabeledComponent from "../util/label/BottomLabeledComponent";

// Parameters Interface
interface LabeledIconButtonParameters {
  className?: string;
  style?: CSSProperties;
  title: string;
  children: ReactNode;
}

// Export Component
export default function LabeledIconButton({
  className = "",
  style = {},
  title,
  children,
}: LabeledIconButtonParameters) {
  // Use State Constants
  const [isActive, setIsActive] = useState<boolean>(false);

  // XML Parameters
  const svgSize = 30;
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div className={`${styles["container"]} rounded pd-10-5`}>
      <BottomLabeledComponent
        style={containerStyle}
        title={title}
        titleClassName={styles["title"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={svgSize}
          height={svgSize}
          fill="currentColor"
          className={styles["icon"]}
          viewBox="0 0 16 16"
        >
          {children}
        </svg>
      </BottomLabeledComponent>
    </div>
  );
}
