import React from "react";
import PostSummaryList from "../PostSummaryList";
import {Link} from "react-router-dom";



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

   const backgroundImage = {
     "background-image": "url(\"../../images/starship-ground.jpeg\")",
     "max-width": "100%",
     "background-size": "cover",
     "text-align": "center",
     "height":"500px",
     "display": "flex"

   }

   const imageText = {
      "display": "inline-block",
      "align-self": "flex-end",
      "color":"white",
      "margin-left":"8px"
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
              <Link className={`nav-link
                ${active === 'foryou' ? 'active' : ''}`} to="foryou">For You</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link
                ${active === 'trending' ? 'active' : ''}`} to="trending">Trending</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link
                ${active === 'news' ? 'active' : ''}`} to="news">News</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link
                ${active === 'sports' ? 'active' : ''}`} to="sports">Sports</Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link
                ${active === 'entertainment' ? 'active' : ''}`} to="entertainment">Entertainment</Link>
            </li>
          </ul>
          <div style={backgroundImage} className="mt-1 img-responsive">
            <div style={imageText}> <h2>SpaceX's Starship </h2></div>
          </div>
          {PostSummaryList()}
      </>
    );
}
export default ExploreComponent;
