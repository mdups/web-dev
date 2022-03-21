import React from "react";
import PostSummaryList from "../PostSummaryList";
const ExploreComponent = ({active='foryou'}) => {
   const searchFormStyle = {
      "padding-left": "2.375rem"
   }

   const searchInputStyle = {
    "position": "absolute",
    "z-index":"2",
    "display":"block",
    "width": "2.375rem",
    "height": "2.375rem",
    "line-height": "2.375rem",
    "text-align": "center",
    "pointer-events": "none",
    "color": "grey"

   }

   const roundedStyle = {
      "border-radius": "25px",
      ...searchFormStyle
   }

    return(
     <>
           <div className="row mb-2">
              <div className="form-group has-search col-11 " style={searchFormStyle}>
                <span className="fa fa-search form-control-feedback" style={searchInputStyle}></span>
                <input type="text" text="Search Twitter"  style={roundedStyle} className="form-control" placeholder="Search Twitter" />
              </div>
              <div className="col-1">
                <a href="#">
                  <i className="fas fa-gear fa-lg wd-gear-position"></i>
                </a>
              </div>
           </div>

           <ul className="nav mb-2 nav-tabs">
            <li className="nav-item ">
              <a className={`nav-link
                ${active === 'foryou' ? 'active' : ''}`} href="#">For You</a>
            </li>
            <li className="nav-item ">
              <a className={`nav-link
                ${active === 'trending' ? 'active' : ''}`} href="#">Trending</a>
            </li>
            <li className="nav-item ">
              <a className={`nav-link
                ${active === 'news' ? 'active' : ''}`} href="#">News</a>
            </li>
            <li className="nav-item ">
              <a className={`nav-link
                ${active === 'sports' ? 'active' : ''}`} href="#">Sports</a>
            </li>
            <li className="nav-item ">
              <a className={`nav-link
                ${active === 'entertainment' ? 'active' : ''}`} href="#">Entertainment</a>
            </li>
          </ul>
          <div className="wd-starship-bg mt-1 img-responsive">
            <div className="wd-image-text"> <h2>SpaceX's Starship </h2></div>
          </div>
          {PostSummaryList()}
      </>
    );
}
export default ExploreComponent;
