import React from "react";
import { Layout, Row, Typography } from "antd";

import ContentFilters from "./ContentFilters";
import ContentCards from "./ContentCards";
import { mockCardDatas } from "../mockData";

const { Title } = Typography;
const { Content } = Layout;

export default function ContentPanel({ colorBgContainer }) {
  return (
    <Content
      style={{
        padding: "24px 72px",
        minHeight: 580,
        background: colorBgContainer,
      }}
    >
      <Title level={2}>Events</Title>
      <Row gutter={2}>
        <ContentFilters />
        <ContentCards contents={mockCardDatas}/>
      </Row>
    </Content>
  );
}
