import React from "react";
import SideBar from "./Views/Sidebar";
import MainView from "./Views/MainView";
import MotifApp from "./MotifApp";
function Motif() {
  //How the application sections are made.
  return (
    <React.Fragment>
      <MainView>
        <MotifApp />
      </MainView>
      <SideBar />
    </React.Fragment>
  );
}

export default Motif;
