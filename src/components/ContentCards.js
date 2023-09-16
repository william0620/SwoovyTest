import React from "react";
import { Col, Pagination } from "antd";

import CustomCard from "./CustomCard";

export default function ContentCards({ contents }) {
  return (
    <Col xl={17} lg={24}>
      {contents.map((content) => (
        <CustomCard
          key={content.id}
          image={content.imgUrl}
          createdAt={content.created_at}
          title={content.title}
          company={content.company}
          location={content.location}
          likedState={content.like}
          interestedNum={content.interests.counts}
          goingNum={content.interests.going}
          users={content.interests.users}
        />
      ))}
      <Pagination
        total={50}
        style={{ padding: "20px", fontSize: "18px", float: "right" }}
      />
    </Col>
  );
}
