import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    //const
    return(
      <>
        <div className="list-group">
          <div class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></div>
          <a className={`list-group-item
            ${active === 'home' ? 'active' : ''}`} href="../home.html">
            <i className="fas fa-home"></i> Home</a>
          <a className={`list-group-item
            ${active === 'explore' ? 'active' : ''}`} href="#">
            <i className="fas fa-hashtag"></i> Explore</a>
          <a className={`list-group-item
            ${active === 'notifications' ? 'active' : ''}`} href="../notifications.html">
            <i className="fas fa-bell"></i> Notifications</a>
          <a className={`list-group-item
            ${active === 'messages' ? 'active' : ''}`} href="../messages.html">
            <i className="fas fa-envelope"></i> Messages</a>
          <a className={`list-group-item
            ${active === 'lists' ? 'active' : ''}`} href="../lists.html">
            <i className="fas fa-list"></i> Lists</a>
          <a className={`list-group-item
            ${active === 'profile' ? 'active' : ''}`} href="../lists.html">
            <i className="fas fa-user"></i> Profile</a>
          <a className={`list-group-item
            ${active === 'more' ? 'active' : ''}`} href="#">
            <span className="fa-stack" style={{"font-size": "0.5em"}}>
              <i className="fas fa-circle fa-stack-2x" style={{"vertical-align":"middle", "display":"inline-block"}}></i>
              <i className="fas fa-ellipsis fa-stack-1x fa-inverse" style={{"vertical-align":"middle", "display":"inline-block", "color":"grey"}}></i>
            </span>More</a>
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