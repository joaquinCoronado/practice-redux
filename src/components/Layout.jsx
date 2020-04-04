import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="card-panel">
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
