import React from "react";
import SideBar from "./MotifApp/Views/Sidebar";
import MotifApp from "./MotifApp";
import { MotifContainer } from "./styles";
function Motif() {
  return (
    <MotifContainer>
      <MotifApp />
      <SideBar />
    </MotifContainer>
  );
}

export default Motif;
