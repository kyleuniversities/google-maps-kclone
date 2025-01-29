// Imports
import { CSSProperties } from "react";
import styles from "./HomePage.module.css";
import MapBackground from "./map-background/MapBackground";
import SideBar from "./side-bar/SideBar";
import SidePadder from "@/component/util/spacer/SidePadder";

// Parameters Interface
interface HomePageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function $moduleName({
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
      <MapBackground />
      <div className={`${styles["sidebar-container"]} flex w-full h-full`}>
        <SideBar />
        <div className={`${styles["main-container"]} flex-col w-full h-full`}>
          <div
            className={`${styles["upper-container"]} flex w-full`}
            style={{ border: "1px solid red" }}
          >
            <div className={`${styles["action-menu"]} flex border background`}>
              <div className={`${styles["search-bar"]} flex border background`}>
                Search Bar
              </div>
              <SidePadder size={40} />
              <div
                className={`${styles["top-nav-menu"]} flex border background`}
              >
                Top Nav Menu
              </div>
            </div>
            <div
              className={`${styles["action-menu"]} float-right border background`}
            >
              Profile Menu
            </div>
          </div>
          {/** TODO: Fix Later **/}
          <div style={{ height: "680px" }}>X</div>
          <div
            className={`${styles["lower-container"]} flex w-full float-bottom`}
          >
            <div className={`${styles["layers-box"]} border background`}>
              Layers Box
            </div>
            <div
              className={`${styles["explore-panel-group"]} float-right border background`}
            >
              Explore Panel Group
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
