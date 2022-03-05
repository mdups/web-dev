import NavigationSidebar from "../NavigationSidebar/index.js";
import smallSidebar from "../NavigationSidebar/smallSidebar.js";
import ExploreComponent from "../ExploreComponent/index.js";
import smallExploreComponent from  "../ExploreComponent/smallExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2 container">
          <div class="d-none d-xl-block col-xl-2 justify-content-center">
            ${NavigationSidebar()}
          </div>
          <div class="d-sm-block col-sm-2 d-md-block col-md-2 d-lg-block col-lg-1 d-xl-none justify-content-center">
            ${smallSidebar()}
          </div>
          <div class="d-none d-xl-block col-xl-6">
            ${ExploreComponent()}
          </div>
          <div class="col-10 d-xl-none">
            ${smallExploreComponent()}
          </div>
          <div class="d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4">
            ${WhoToFollowList()}
          </div>
        </div>
    `);
})($);
