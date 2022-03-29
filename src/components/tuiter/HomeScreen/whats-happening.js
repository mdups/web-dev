import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');

  const dispatch = useDispatch();

  const tuitClickHandler = () => {
   dispatch({type: 'create-tuit',
     tuit: whatsHappening
   });
  }
  const roundedCorners = {
    "border-radius": "50px"
  }
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img src={"../../images/miles-profile-image.jpg"} height="50px" width="50px" style={roundedCorners}/>
        </div>
        <div className="col-11">
          <textarea className="form-control"
                   value={whatsHappening}
                   onChange={(event) =>
            setWhatsHappening(event.target.value)}>
          </textarea>
          <button onClick={tuitClickHandler} style={{"float":"right"}} className="btn btn-primary btn-block rounded-pill mt-1 mb-2">
            Tuit
          </button>
        </div>
      </div>
    </>
  );
}
export default WhatsHappening;