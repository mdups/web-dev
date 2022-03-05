import PostSummaryList from "../PostSummaryList/index.js";
const smallExploreComponent = () => {
    return(`
           <div class="row mb-2">
              <div class="form-group has-search col-11 ">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" text="Search Twitter"  class="form-control wd-rounded" placeholder="Search Twitter">
              </div>
              <div class="col-1">
                <a href="#">
                  <i class="fas fa-gear fa-lg wd-gear-position"></i>
                </a>
              </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
            <li class="nav-item ">
              <a class="nav-link active " href="#">For You</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#">Trending</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#">News</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#">Sports</a>
            </li>
          </ul>
          <div class="wd-starship-bg mt-1 img-responsive">
            <div class="wd-image-text"> <h1>SpaceX's Starship </h1></div>
          </div>
          ${PostSummaryList()}
    `);
}
export default smallExploreComponent;
