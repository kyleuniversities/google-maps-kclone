// Imports
import { CSSProperties } from "react";
import styles from "./EnterBusinessPage.module.css";

// Parameters Interface
interface EnterBusinessPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function EnterBusinessPage({
  className = "",
  style = {},
}: EnterBusinessPageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style
  }

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{className}}}`}
      style={containerStyle}
    >
      EnterBusinessPage
    </div>
  );
}