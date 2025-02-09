// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode, useState } from "react";
import styles from "./LabeledIconButton.module.css";
import ShortLabeledComponent from "../util/label/ShortLabeledComponent";

// Parameters Interface
interface LabeledIconButtonParameters {
  className?: string;
  style?: CSSProperties;
  border?: string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  margin?: number | string | undefined;
  padding?: number | string | undefined;
  svgSize?: number;
  title: string;
  labelPlacement: "top" | "left" | "right" | "bottom";
  children: ReactNode;
}

// Export Component
export default function LabeledIconButton({
  className = "",
  style = {},
  border,
  width,
  height,
  margin,
  padding,
  svgSize = 30,
  title,
  labelPlacement,
  children,
}: LabeledIconButtonParameters) {
  // Use State Constants
  const [isActive, setIsActive] = useState<boolean>(false);

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    border,
    width,
    height,
    margin,
    padding,
  };
  const componentStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} rounded pd-10-5`}
      style={containerStyle}
    >
      <ShortLabeledComponent
        style={componentStyle}
        title={title}
        titleClassName={styles["title"]}
        labelPlacement={labelPlacement}
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
      </ShortLabeledComponent>
    </div>
  );
}
