import React from "react";

const WhoToFollowListItem = (
   {
      who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
        }
      }
    ) => {
    return(
           <li className="list-group-item">
            <div className="row">
              <div className="col-2">
                <img src={who.avatarIcon} height="50px" width="50px" className=" wd-circle" />
              </div>
              <div className="col-7 col">
                <strong>
                  {who.userName}
                  <i className="fa-solid fa-circle-check"></i>
                </strong>
                <div>
                  @{who.handle}
                </div>
              </div>
              <div className="col-3 text-center mt-2">
                <button type="button" className="btn-md btn-primary rounded-pill">Follow</button>
              </div>
            </div>
           </li>
    );
}
export default WhoToFollowListItem;



