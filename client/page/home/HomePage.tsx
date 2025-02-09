// Imports
import { CSSProperties } from "react";
import styles from "./HomePage.module.css";
import MapBackground from "./map-background/MapBackground";
import SideBar from "./side-bar/SideBar";
import SidePadder from "@/component/util/spacer/SidePadder";
import SearchMenu from "./search-menu/SearchMenu";
import TopNavMenu from "./top-nav-menu/TopNavMenu";
import ProfileDropdown from "./profile-dropdown/ProfileDropdown";
import GridContainer from "@/component/util/grid/GridContainer";
import GridComponent from "@/component/util/grid/GridComponent";

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
              <div className={`${styles["search-bar"]} flex-col`}>
                <GridContainer>
                  <GridComponent zIndex={0}>
                    <SearchMenu />
                  </GridComponent>
                  <GridComponent position="absolute" zIndex={0}>
                    <div style={{ opacity: 0 }}>
                      <SearchMenu />
                    </div>
                  </GridComponent>
                </GridContainer>
              </div>
              <SidePadder size={10} />
              <TopNavMenu />
            </div>
            <div className={`${styles["action-menu"]} float-right`}>
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
