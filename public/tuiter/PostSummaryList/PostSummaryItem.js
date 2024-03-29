const PostSummaryItem = (post) => {
  return(`
    <li class="list-group-item">
                  <div class="row">
                    <div class="col-9">
                      <div> ${post.topic}</div>
                      <strong>
                        ${post.userName}
                        <i class="fa-solid fa-circle-check"></i>
                      </strong>
                      <span>
                      - ${post.time}
                      <div> ${post.tweets}</div>
                    </span>
                      <div> <strong> ${post.title} </strong></div>
                    </div>
                    <div class="col-3">
                      <img src=${post.image} height="85px" width="85px" class="wd-float-right wd-rounded-corners">
                    </div>
                  </div>
                </li>

  `)

}
export default PostSummaryItem