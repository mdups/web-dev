import React from "react"
import PostSummaryItem from "./PostSummaryListItem";
import exploreItems from "./posts";

const PostSummaryList = () => {
  return(
          <ul className="list-group mb-2">
              {
                  exploreItems.map(exploreItems => {
                      return(
                        <PostSummaryItem post={exploreItems}/>
                        )

                  })
              }
          </ul>
  )
}

export default PostSummaryList;