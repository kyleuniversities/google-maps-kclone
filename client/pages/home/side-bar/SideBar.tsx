// Imports
import { CSSProperties } from "react";
import styles from "./SideBar.module.css";
import LabeledIconButton from "@/components/app/LabeledIconButton";
import {
  BOOKMARK_SVG_PATH,
  LIST_SVG_PATH,
  RECENTS_SVG_PATH,
} from "@/resource/svg";

// Parameters Interface
interface SideBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SideBar({
  className = "",
  style = {},
}: SideBarParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} h-full background border`}
      style={containerStyle}
    >
      <LabeledIconButton title="">{LIST_SVG_PATH}</LabeledIconButton>
      <LabeledIconButton title="Saved">{BOOKMARK_SVG_PATH}</LabeledIconButton>
      <LabeledIconButton title="Recents">{RECENTS_SVG_PATH}</LabeledIconButton>
    </div>
  );
}
