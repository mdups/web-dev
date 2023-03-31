import React from "react";
import TuitList from "../tuit-list"
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  const {b,a} = {a: 10, b:5}
  console.log(b)
  return(
    <>
      <WhatsHappening />
      <TuitList />
    </>
  );
}
export default HomeScreen;