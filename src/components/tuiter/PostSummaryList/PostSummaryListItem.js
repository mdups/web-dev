import React from "react";

const PostSummaryItem = ({
    post = {
      "topic": "Web Development",
       "userName": "ReactJS",
       "time": "2h",
       "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
       "image": "../../../images/reactjs.jpeg"
    }}) => {

    const floatRight = {
      "float":"right"
    }
    const roundedCorners = {
      "border-radius": "25px"
    }
    return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-9">
            <div> {post.topic}</div>
              <strong>
                {post.userName}
                <i className="fa-solid fa-circle-check"></i>
              </strong>
              <span>
                - {post.time}
                <div> {post.tweets}</div>
              </span>
              <div> <strong> {post.title} </strong></div>
          </div>
          <div className="col-3">
            <img src={post.image} height="85px" width="85px" style={floatRight, roundedCorners}/>
          </div>
        </div>
      </li>
    )}
export default PostSummaryItem