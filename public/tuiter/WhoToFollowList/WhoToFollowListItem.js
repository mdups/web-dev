const WhoToFollowListItem = (who) => {
    return(`
            <li class="list-group-item">
                          <div class="row">
                            <div class="col-2">
                              <img src=${who.avatarIcon} height="50px" width="50px" class=" wd-circle">
                            </div>
                            <div class="col-7 col">
                              <strong>
                                ${who.userName}
                                <i class="fa-solid fa-circle-check"></i>
                              </strong>
                              <div>
                                ${who.handle }
                              </div>
                            </div>
                            <div class="col-3 text-center mt-2">
                              <button type="button" class="btn-md btn-primary wd-rounded">Follow</button>
                            </div>
                          </div>
                        </li>
    `);
}
export default WhoToFollowListItem;