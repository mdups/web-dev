import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats"
import {deleteTuit,updateTuit} from "../../../actions/tuits-actions";

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
              <i className="fas fa-times float-end"
                       onClick={() => deleteTuit(
                         dispatch, tuit)}></i>
            </div>
            {tuit.tuit}
            <div className="row mt-1 row">
              <i className="fas fa-comment col-2"> {tuit.stats.comments} </i>
              <i className="fas fa-retweet col-2">{tuit.stats.retuits}</i>

              <div className="col-2">
                   <i onClick={() => updateTuit(dispatch, {
                     ...tuit,
                     likes: tuit.likes + 1
                   })} className="far fa-thumbs-up ms-2"></i>
                   {tuit.likes}
              </div>
              <div className="col-2">
                                 <i onClick={() => updateTuit(dispatch, {
                                   ...tuit,
                                   dislikes: tuit.dislikes + 1
                                 })} className="far fa-thumbs-down ms-2"></i>
                                 {tuit.dislikes}
                            </div>
              <i className="fas fa-share col-2:"></i>
            </div>
          </div>
        </div>
      </li>
    )}
export default TuitListItem