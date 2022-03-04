const NavigationSidebar = () => {
    return(`
            <div class="list-group">
              <div class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></div>
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
                  <i class="fas fa-ellipsis fa-stack-1x fa-inverse wd-i" ></i>
                </span>More</a>
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
