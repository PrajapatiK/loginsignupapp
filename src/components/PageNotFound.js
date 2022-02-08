import React from "react";

const PageNotFound = () => {
  //console.log("page not found!!!!");
  return (
    <div
      style={{
        
        position: "fixed",
        top: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="display-1">Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
