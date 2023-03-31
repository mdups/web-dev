const smallSidebar = () => {
    return(`
            <div class="list-group">
              <div class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></div>
              <a class="list-group-item" href="../home.html">
                <i class="fas fa-house"></i> </a>
              <a class="list-group-item" href="#">
                <i class="fas fa-hashtag"></i> </a>
              <a class="list-group-item" href="../notifications.html">
                <i class="fas fa-bell"></i> </a>
              <a class="list-group-item" href="../messages.html">
                <i class="fas fa-envelope"></i> </a>
              <a class="list-group-item" href="../lists.html">
                <i class="fas fa-list"></i> </a>
              <a class="list-group-item" href="../lists.html">
                <i class="fas fa-user"></i> </a>
              <a class="list-group-item" href="#">
                <span class="fa-stack small">
                  <i class="fas fa-circle fa-stack-2x wd-i"></i>
                  <i class="fas fa-ellipsis fa-stack-1x fa-inverse wd-i" style="color:gray"></i>
                </span></a>
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
            </div>
    `);
}
export default smallSidebar;