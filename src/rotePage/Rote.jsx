import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../NavigationBar/Nav";
import SubNav from "../NavigationBar/SubNav";

const Rote = () => {
  return (
    <div className="h-screen max-w-[1500px] mx-auto font-500 w-full  flex flex-col">
      <Nav></Nav>
      <SubNav></SubNav>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <div className="text-center">footer</div>
    </div>
  );
};

export default Rote;
