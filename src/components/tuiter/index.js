import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar"
import WhoToFollowList from "./WhoToFollowList"
const Tuiter = () => {
    return(
      <div>
          <br/>
          <WhoToFollowList />
          <br/>
          <NavigationSidebar active={'home'}/>
      </div>
    )
};

export default Tuiter;
