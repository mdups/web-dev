import React from "react";
import {Link} from "react-router-dom";

const SmallSidebar = ({active = 'explore'}) => {
    const iconStyle = {
      "vertical-align":"middle",
      "display":"inline-block"
    }
    const faSmallStyle = {
      "font-size": "0.5em"
    }
    return(
      <>
        <div className="list-group">
          <div class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></div>
          <Link className={`list-group-item
            ${active === 'home' ? 'active' : ''}`} to="home">
            <i className="fas fa-home"></i> </Link>
          <Link className={`list-group-item
            ${active === 'explore' ? 'active' : ''}`} to="explore">
            <i className="fas fa-hashtag"></i> </Link>
          <Link className={`list-group-item
            ${active === 'notifications' ? 'active' : ''}`} to="notifications">
            <i className="fas fa-bell"></i> </Link>
          <Link className={`list-group-item
            ${active === 'messages' ? 'active' : ''}`} to="messages">
            <i className="fas fa-envelope"></i> </Link>
          <Link className={`list-group-item
            ${active === 'lists' ? 'active' : ''}`} to="lists">
            <i className="fas fa-list"></i> </Link>
          <Link className={`list-group-item
            ${active === 'profile' ? 'active' : ''}`} to="profile">
            <i className="fas fa-user"></i> </Link>
          <Link className={`list-group-item
            ${active === 'more' ? 'active' : ''}`} to="more">
            <span className="fa-stack" style={faSmallStyle}>
              <i className="fas fa-circle fa-stack-2x" style={iconStyle}></i>
              <i className="fas fa-ellipsis fa-stack-1x fa-inverse" style={iconStyle}></i>
            </span></Link>
          <div className="d-grid mt-2 justify-content-center">
            <Link to="tweet" className=" btn btn-primary btn-block rounded-pill">
            Tweet</Link>
          </div>
        </div>

      </>
    );
}
export default SmallSidebar;