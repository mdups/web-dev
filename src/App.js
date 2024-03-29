import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css'
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import NotificationScreen from "./components/tuiter/NotificationScreen";
import HomeScreen from "./components/tuiter/HomeScreen";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
 return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index exact={true} element={<Labs/>}/>
              <Route path="labs" exact={true}
                                   element={<Labs/>}/>
              <Route path="hello"
                     element={<HelloWorld/>}/>
              <Route path="tuiter" element={<Tuiter />}>
                <Route index
                       element={<HomeScreen/>}/>
                <Route  path="explore"
                       element={<ExploreScreen/>}/>
                <Route path="notifications"
                       element={<NotificationScreen/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
 );
}


export default App;
