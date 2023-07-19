import React from "react";
import NavbarOne from "../Pages/Home/Navbar/NavbarOne";
import NavbarTwo from "../Pages/Home/Navbar/NavbarTwo";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavbarOne></NavbarOne>
      <NavbarTwo></NavbarTwo>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
