import { Content } from "antd/es/layout/layout";
import React from "react";

const SmallSpinner = () => {
  return (
    <div
      class="spinner-container mt-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Loading...</h3>
      {/* <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div> */}
    </div>
  );
};

export default SmallSpinner;
