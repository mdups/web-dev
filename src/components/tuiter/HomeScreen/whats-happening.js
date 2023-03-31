import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');

  const dispatch = useDispatch();
  const [newTuit, setNewTuit] = useState(
    {
     "topic": "Web Development",
     "postedBy": {
       "username": "miles-dupee"
     },
     "liked": true,
     "verified": false,
     "handle": "miles-dupee",
     "time": "2h",
     "title": "new tuit",
     "tuit": "new tuit",
     "attachments": {
       "video": "unKvMC3Y1kI"
     },
     "logo-image": "../../images/miles-profile-image.jpg",
     "avatarImage": "../../images/miles-profile-image.jpg",
     "stats": {
       "comments": 123,
       "retuits": 234,
       "likes": 345
     }
   });

  const roundedCorners = {
    "border-radius": "50px"
  }
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img src={"../../images/miles-profile-image.jpg"} height="50px" width="50px" style={roundedCorners}/>
        </div>
        <div className="col-11 mb-2">

          <textarea
            placeholder="tuit something!"
            className="form-control"
            onChange={(e) =>
              setNewTuit({...newTuit, tuit: e.target.value})}></textarea>
          <button onClick={() =>
             createTuit(dispatch, newTuit)}
               className="btn btn-primary float-end mt-2">
             Tuit
          </button>
        </div>
      </div>
    </>
  );
}
export default WhatsHappening;