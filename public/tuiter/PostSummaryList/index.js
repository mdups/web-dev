import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
  return(`
          <ul class="list-group mb-2">
              ${
                  exploreItems.map(exploreItems => {
                      return(PostSummaryItem(exploreItems));
                  }).join('')
              }
          </ul>
  `)
}

export default PostSummaryList;