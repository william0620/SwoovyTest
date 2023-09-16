import React from "react";
import { Layout, Space, Typography, Input, Checkbox, Slider, Col } from "antd";

import ToggleButton from "./ToggleButton";
import { mockFilterMatchStates } from "../mockData";
import { mockFilterScheduleStates } from "../mockData";
import { mockFilterOrganizationStates } from "../mockData";
import { mockFilterCategoryStates } from "../mockData";
import { mockFilterSDGStates } from "../mockData";

const { Title } = Typography;
const { Search } = Input;

export default function ContentFilters() {
  return (
    <Col xl={7} lg={24}>
      <Layout
        style={{
          boxShadow: "2px 2px 5px lightgrey",
          margin: "16px",
          padding: "30px",
          backgroundColor: "white",
        }}
      >
        <Space direction="vertical">
          <Search placeholder="input search text" allowClear enterButton />
          <Title level={3} style={{ marginTop: "10px" }}>
            FILTERS
          </Title>
          <Title level={4} style={{ marginTop: "0px" }}>
            Show matches from
          </Title>
          {mockFilterMatchStates.map((item) => (
            <Checkbox key={item.id} style={{ fontSize: "18px" }}>
              {item.name}
            </Checkbox>
          ))}

          <Title level={4} style={{ marginTop: "10px" }}>
            Distance from me (miles)
          </Title>
          <Slider defaultValue={30} />
          <Title level={4} style={{ marginTop: "10px" }}>
            Schedule
          </Title>
          {mockFilterScheduleStates.map((item) => (
            <Checkbox key={item.id} style={{ fontSize: "18px" }}>
              {item.name}
            </Checkbox>
          ))}
          <Title level={4} style={{ marginTop: "10px" }}>
            Organization
          </Title>
          {mockFilterOrganizationStates.map((item) => (
            <Checkbox key={item.id} style={{ fontSize: "18px" }}>
              {item.name}
            </Checkbox>
          ))}
          <Title level={4} style={{ marginTop: "10px" }}>
            Cause Categories
          </Title>
          <Space
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {mockFilterCategoryStates.map((item) => (
              <ToggleButton
                key={item.id}
                clicked={item.clicked}
                text={item.name}
              />
            ))}
          </Space>
          <Title level={4} style={{ marginTop: "10px" }}>
            SDG
          </Title>
          <Space
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {mockFilterSDGStates.map((item) => (
              <ToggleButton
                key={item.id}
                clicked={item.clicked}
                text={item.name}
              />
            ))}
          </Space>
        </Space>
      </Layout>
    </Col>
  );
}
