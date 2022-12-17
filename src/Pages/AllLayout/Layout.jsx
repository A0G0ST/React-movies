import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/header/Header";

const All = () => {
  return (
    <Fragment>
      <Header />
      <Outlet></Outlet>
    </Fragment>
  );
};

export default All;
