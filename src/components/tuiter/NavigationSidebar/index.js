import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = ({active = 'explore'}) => {
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
            <i className="fas fa-home"></i> Home</Link>
          <Link className={`list-group-item
            ${active === 'explore' ? 'active' : ''}`} to="explore">
            <i className="fas fa-hashtag"></i> Explore</Link>
          <Link className={`list-group-item
            ${active === 'notifications' ? 'active' : ''}`} to="notifications">
            <i className="fas fa-bell"></i> Notifications</Link>
          <Link className={`list-group-item
            ${active === 'messages' ? 'active' : ''}`} to="messages">
            <i className="fas fa-envelope"></i> Messages</Link>
          <Link className={`list-group-item
            ${active === 'lists' ? 'active' : ''}`} to="lists">
            <i className="fas fa-list"></i> Lists</Link>
          <Link className={`list-group-item
            ${active === 'profile' ? 'active' : ''}`} to="profile">
            <i className="fas fa-user"></i> Profile</Link>
          <Link className={`list-group-item
            ${active === 'more' ? 'active' : ''}`} to="more">
            <span className="fa-stack" style={faSmallStyle}>
              <i className="fas fa-circle fa-stack-2x" style={iconStyle}></i>
              <i className="fas fa-ellipsis fa-stack-1x fa-inverse" style={iconStyle}></i>
            </span>More</Link>
          <div className="d-grid mt-2">
            <Link to="tweet" className="btn btn-primary btn-block rounded-pill">
            Tweet</Link>
          </div>
        </div>

      </>
    );
}
export default NavigationSidebar;


/*



`
            <div class="list-group">

              <a class="list-group-item" href="../home.html">
                <i class="fas fa-house"></i> Home</a>
              <a class="list-group-item" href="#">
                <i class="fas fa-hashtag"></i> Explore</a>
              <a class="list-group-item" href="../notifications.html">
                <i class="fas fa-bell"></i> Notifications</a>
              <a class="list-group-item" href="../messages.html">
                <i class="fas fa-envelope"></i> Messages</a>
              <a class="list-group-item" href="../lists.html">
                <i class="fas fa-list"></i> Lists</a>
              <a class="list-group-item" href="../lists.html">
                <i class="fas fa-user"></i> Profile</a>
              <a class="list-group-item" href="#">
                <span class="fa-stack small">
                  <i class="fas fa-circle fa-stack-2x wd-i"></i>
                  <i class="fas fa-ellipsis fa-stack-1x fa-inverse wd-i" style="color:gray"></i>
                </span>More</a>
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
            </div>
    `



*/