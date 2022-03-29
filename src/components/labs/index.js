import React from "react";
import Classes from "./classes";
import {Link} from "react-router-dom";
import Styles from "./styles";
import ReduxExamples from "./redux-examples";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo"
const Labs = () => {
    return(
      <div>
          <h1>Labs</h1>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <TodoList/>
          <ReduxExamples />
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
      </div>
    )
};

export default Labs;
