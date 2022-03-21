import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar"
import WhoToFollowList from "./WhoToFollowList"
import PostSummaryList from "./PostSummaryList"
import ExploreComponent from "./ExploreComponent"

const Tuiter = () => {
    return(
      <div>
          <br/>
          <ExploreComponent active={'foryou'}/>
          <br/>
          <WhoToFollowList />
          <br/>
          <PostSummaryList />
          <br/>
          <NavigationSidebar active={'home'}/>
      </div>
    )
};

export default Tuiter;
