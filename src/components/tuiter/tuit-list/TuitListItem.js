import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats"
const TuitListItem = ({
    tuit = {
               "_id": "123",
               "topic": "Web Development",
               "postedBy": {
                 "username": "ReactJS"
               },
               "liked": true,
               "verified": false,
               "handle": "ReactJS",
               "time": "2h",
               "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
               "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
               "attachments": {
                 "video": "unKvMC3Y1kI"
               },
               "logo-image": "../../images/reactjs.jpeg",
               "avatarImage": "../../images/reactjs.jpeg",
               "stats": {
                 "comments": 123,
                 "retuits": 234,
                 "likes": 345
               }
             }}) => {
    const roundedCorners = {
      "border-radius": "50px"
    }
    const colorGrey = {
      "color":"grey"
    }
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img src={tuit.avatarImage} height="85px" width="85px" style={roundedCorners}/>
          </div>
          <div className="col-10">
            <div>
              {tuit.postedBy.username}
              <span style={colorGrey}> @{tuit.handle}</span>
              <span> <i onClick={() =>
                  deleteTuit(tuit)}
                  className="fas fa-times fa-pull-right">
                </i></span>
            </div>
            {tuit.tuit}
            <div className="row mt-1 row">
              <i className="fas fa-comment col-3"> {tuit.stats.comments} </i>
              <i className="fas fa-retweet col-3">{tuit.stats.retuits}</i>
              <span className="col-3"><TuitStats tuit={tuit}/></span>
              <i className="fas fa-share col-3"></i>
            </div>
          </div>
        </div>
      </li>
    )}
export default TuitListItem