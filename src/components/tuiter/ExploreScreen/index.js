import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import SmallSidebar from "../NavigationSidebar/smallSidebar";
import ExploreComponent from "../ExploreComponent";
import SmallExploreComponent from  "../ExploreComponent/smallExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
      <>
        <div className="row mt-2 container">
          <div className="d-none d-xl-block col-xl-2 justify-content-center">
            <NavigationSidebar/>
          </div>
          <div class="d-none d-lg-block d-sm-block col-sm-2 d-md-block col-md-2 d-lg-block col-lg-1 d-xl-none justify-content-center">
            <SmallSidebar/>
          </div>
          <div className="d-none d-xl-block col-xl-6">
            <ExploreComponent/>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-6 d-lg-block d-xl-none">
            <SmallExploreComponent/>
          </div>
          <div className="d-none d-lg-block col-lg-5 d-xl-block col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </>
    );
}
export default ExploreScreen;