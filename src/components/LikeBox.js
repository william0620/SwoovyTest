import React from "react";
import { Avatar, Layout } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import arrow from "../assets/image/arrow.png";

export default function LikeBox({ liked, setLiked }) {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "4",
        backgroundColor: "white",
      }}
    >
      {liked ? (
        <HeartFilled
          style={{ color: "#f3725d", fontSize: "32px", userSelect: "none" }}
          onClick={() => setLiked(false)}
        />
      ) : (
        <HeartOutlined
          style={{ color: "#f3725d", fontSize: "32px", userSelect: "none" }}
          onClick={() => setLiked(true)}
        />
      )}

      <Avatar
        shape="square"
        size={32}
        src={arrow}
        style={{ margin: "0px 20px" }}
      />
    </Layout>
  );
}
