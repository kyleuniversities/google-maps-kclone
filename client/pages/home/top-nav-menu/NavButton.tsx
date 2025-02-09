// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./NavButton.module.css";
import LabeledIconButton from "@/components/app/LabeledIconButton";

// Parameters Interface
interface NavButtonParameters {
  className?: string;
  style?: CSSProperties;
  svgSize?: number;
  title: string;
  children: ReactNode;
}

// Export Component
export default function NavButton({
  className = "",
  style = {},
  svgSize,
  title,
  children,
}: NavButtonParameters) {
  // XML Parameters
  const minWidth = "70px";
  const navButtonStyle = { minWidth, fontSize: 14 };
  const containerStyle: CSSProperties = {
    ...style,
    ...navButtonStyle,
  };

  // Return Component
  return (
    <LabeledIconButton
      title={title}
      labelPlacement="right"
      border="1px solid black"
      margin={10}
      padding={10}
      width="auto"
      height={40}
      svgSize={svgSize}
      style={containerStyle}
    >
      {children}
    </LabeledIconButton>
  );
}
