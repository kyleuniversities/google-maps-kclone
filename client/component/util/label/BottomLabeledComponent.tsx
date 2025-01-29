// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./BottomLabeledComponent.module.css";

// Parameters Interface
interface BottomLabeledComponentParameters {
  className?: string;
  style?: CSSProperties;
  titleClassName?: string;
  titleStyle?: CSSProperties;
  title: string;
  children: ReactNode;
}

// Export Component
export default function BottomLabeledComponent({
  className = "",
  style = {},
  titleClassName = "",
  titleStyle = {},
  title,
  children,
}: BottomLabeledComponentParameters) {
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
      {children}
      {title.trim().length > 0 && (
        <div className={titleClassName} style={titleStyle}>
          {title}
        </div>
      )}
    </div>
  );
}
