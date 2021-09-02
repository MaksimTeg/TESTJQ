import React from "react";
import { SyncOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export const Preloader = (props) => {
  return (
    <div>
      <SyncOutlined spin />
    </div>
  );
};
