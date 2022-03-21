import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who";
const WhoToFollowList = () => {
    return(
        <ul className="list-group">
          <li className="list-group-item"> <b>Who To Follow </b>
            {
              who.map(who => {
                return(
                  <WhoToFollowListItem who={who}/>
                );
            })}
          </li>
        </ul>
    );
}
export default WhoToFollowList;
