import { Layout, Avatar } from "antd";
import React from "react";

export default function Mark({ logo, text }) {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Avatar src={logo} style={{ marginLeft: "15px" }} />
      <p>{text}</p>
    </Layout>
  );
}
