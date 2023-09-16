import React from "react";
import { Avatar, Layout } from "antd";
import "../App.css";

import LikeBox from "./LikeBox";

export default function CardFooter({
  interestedNum,
  goingNum,
  liked,
  setLiked,
  users,
}) {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            backgroundColor: "white",
          }}
        >
          <Avatar.Group>
            {users &&
              users.map((user, index) => (
                <Avatar
                  key={index}
                  src={user.profileImg}
                  style={
                    index === 0
                      ? { border: "2px solid #fdfbfb" }
                      : {
                          marginInlineStart: "-12px",
                          border: "2px solid #fdfbfb",
                        }
                  }
                />
              ))}
          </Avatar.Group>
          <p>...</p>
        </Layout>
        <p>{interestedNum} interested</p>
        <p>{goingNum} Going</p>
      </Layout>
      <LikeBox liked={liked} setLiked={setLiked} />
    </Layout>
  );
}
