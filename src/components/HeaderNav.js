import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  DownSquareOutlined,
  MessageOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Button, Badge, Avatar, Row, Col, Dropdown, Space } from "antd";
import avatar2 from "../assets/avatar/avatar2.jfif";

const { Header } = Layout;

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

export default function HeaderNav({
  collapsed,
  setCollapsed,
  colorBgContainer,
}) {
  return (
    <Header
      style={{
        padding: "30px",
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col xxl={12}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="primary"
            icon={<UnorderedListOutlined />}
            style={{
              fontSize: "16px",
              backgroundColor: "#3eceb1",
              color: "black",
            }}
          >
            {collapsed ? "" : "Report Volunteer Service Hours"}
          </Button>
          <Button
            type="primary"
            icon={<DownSquareOutlined />}
            style={{
              marginLeft: "20px",
              fontSize: "16px",
              backgroundColor: "#0c3f65",
            }}
          >
            {collapsed ? "" : "Message my HR representative"}
          </Button>
        </Col>
        <Col xxl={6} style={{ textAlign: "right" }}>
          <Badge color="green" count={5} style={{ marginRight: "15px" }}>
            <Avatar
              icon={<MessageOutlined />}
              style={{ marginRight: "10px" }}
            />
          </Badge>
          <Avatar icon={<BellOutlined />} style={{ marginRight: "10px" }} />
          <Avatar src={avatar2} style={{ marginRight: "10px" }} />
          <Dropdown
            menu={{
              items,
            }}
          >
            <Space style={{ cursor: "pointer", marginRight: "10px" }}>
              Amelie Anderson
              <DownOutlined />
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
