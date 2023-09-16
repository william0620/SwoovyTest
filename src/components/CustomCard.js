import { Col, Row, Typography, Layout } from "antd";
import React, { useState } from "react";

import CardFooter from "./CardFooter";
import Mark from "./Mark";

import fishLogo from "../assets/image/fish-logo.jfif";
import mapLogo from "../assets/image/map-pointer.png";

const { Title } = Typography;

export default function CustomCard({
  image,
  createdAt,
  title,
  company,
  location,
  likedState,
  interestedNum,
  goingNum,
  users,
}) {
  const [liked, setLiked] = useState(likedState);

  return (
    <Row
      style={{
        boxShadow: "2px 2px 5px lightgrey",
        margin: "16px",
        backgroundColor: "white",
      }}
    >
      <Col
        span={10}
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></Col>
      <Col span={14}>
        <Layout
          style={{ padding: "0px 10px 10px 20px", backgroundColor: "white" }}
        >
          <Title level={4} style={{ color: "red", marginTop: "15px" }}>
            {createdAt}
          </Title>
          <Title level={3} style={{ color: "#0b3f65", marginTop: "10px" }}>
            {title}
          </Title>
          <Mark logo={fishLogo} text={`By ${company}`}></Mark>
          <Mark logo={mapLogo} text={location}></Mark>
          <CardFooter
            liked={liked}
            setLiked={setLiked}
            interestedNum={interestedNum}
            goingNum={goingNum}
            users={users}
          />
        </Layout>
      </Col>
    </Row>
  );
}
