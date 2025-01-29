// Imports
import { CSSProperties } from "react";
import styles from "./HomePage.module.css";
import MapBackground from "./map-background/MapBackground";
import SideBar from "./side-bar/SideBar";
import SidePadder from "@/component/util/spacer/SidePadder";
import SearchMenu from "./search-menu/SearchMenu";
import TopNavMenu from "./top-nav-menu/TopNavMenu";

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
          <div className={`${styles["upper-container"]} flex w-full`}>
            <div className={`${styles["action-menu"]} flex-center`}>
              <div className={`${styles["search-bar"]} flex`}>
                <SearchMenu />
              </div>
              <SidePadder size={10} />
              <TopNavMenu />
            </div>
            <div className={`${styles["action-menu"]} float-right border`}>
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
