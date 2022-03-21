import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar"
import WhoToFollowList from "./WhoToFollowList"
import PostSummaryList from "./PostSummaryList"
const Tuiter = () => {
    return(
      <div>
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
