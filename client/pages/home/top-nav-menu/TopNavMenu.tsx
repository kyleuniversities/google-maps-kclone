// Imports
import { CSSProperties } from "react";
import styles from "./TopNavMenu.module.css";
import NavButton from "./NavButton";
import LabeledIconButton from "@/components/app/LabeledIconButton";
import {
  ATM_SVG_PATH,
  BUS_FRONT_SVG_PATH,
  HOSPITAL_SVG_PATH,
  HOTEL_SVG_PATH,
  MUSEUMS_SVG_PATH,
  RESTAURANT_SVG_PATH,
  THINGS_TO_DO_SVG_PATH,
} from "@/resource/svg";

// Parameters Interface
interface TopNavMenuParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TopNavMenu({
  className = "",
  style = {},
}: TopNavMenuParameters) {
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
      <NavButton title="Restaurants">{RESTAURANT_SVG_PATH}</NavButton>
      <NavButton title="Hotels">{HOTEL_SVG_PATH}</NavButton>
      <NavButton title="Things to do">{THINGS_TO_DO_SVG_PATH}</NavButton>
      <NavButton title="Museums">{MUSEUMS_SVG_PATH}</NavButton>
      <NavButton title="Transit">{BUS_FRONT_SVG_PATH}</NavButton>
      <NavButton title="Pharmacy">{HOSPITAL_SVG_PATH}</NavButton>
      <NavButton title="ATM">{ATM_SVG_PATH}</NavButton>
    </div>
  );
}
