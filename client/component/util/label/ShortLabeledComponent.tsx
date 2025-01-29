// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./ShortLabeledComponent.module.css";
import SidePadder from "../spacer/SidePadder";

// Parameters Interface
interface ShortLabeledComponentParameters {
  className?: string;
  style?: CSSProperties;
  titleClassName?: string;
  titleStyle?: CSSProperties;
  title: string;
  labelPlacement?: "top" | "left" | "right" | "bottom";
  children: ReactNode;
}

// Export Component
export default function ShortLabeledComponent({
  className = "",
  style = {},
  titleClassName = "",
  titleStyle = {},
  labelPlacement = "bottom",
  title,
  children,
}: ShortLabeledComponentParameters) {
  // XML Functions
  const isColumnBased = labelPlacement === "top" || labelPlacement === "bottom";
  const getLabelPlacement = () => {
    if (isColumnBased) {
      return "column";
    }
    return "row";
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    flexDirection: getLabelPlacement(),
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      {children}
      {!isColumnBased && <SidePadder size={10} />}
      {title.trim().length > 0 && (
        <div className={titleClassName} style={titleStyle}>
          {title}
        </div>
      )}
    </div>
  );
}
