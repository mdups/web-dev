import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
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
