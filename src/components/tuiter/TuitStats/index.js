import {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const [updatedTuit, SetUpdateTuit] = useState(tuit);
  return (

    <span onClick={() => {
        if(updatedTuit.liked){
            let newLikes = updatedTuit.stats.likes -1;
            const newStats = {
              "comments": "1",
              "retuits": "1",
              "likes":newLikes
            }
            SetUpdateTuit({...updatedTuit, stats: newStats});
            SetUpdateTuit({...updatedTuit, liked : false});
        }else{
            SetUpdateTuit({...updatedTuit, stats:{...updatedTuit.stats, likes: updatedTuit.stats.likes + 1}})
            SetUpdateTuit({...updatedTuit, liked : true})
        }
        updateTuit(dispatch, updatedTuit)}}>
        {
          updatedTuit.liked &&
          <i className="fas fa-heart me-1"
             style={{color: 'red'}}></i>
        }
        {
          !updatedTuit.liked &&
          <i className="far fa-heart me-1"></i>
        }
        {updatedTuit.stats.likes}
        </span>

  );
}
export default TuitStats;