import React from "react";
import {
  LayoutOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  TeamOutlined,
  TrophyOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import logo from "../assets/logo.png";
import logoRounded from "../assets/logo-rounded.png";

import "../styles/siderPanel.css";

const { Sider } = Layout;
const navItems = [
  {
    key: "1",
    icon: <LayoutOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <AppstoreOutlined style={{ transform: "rotate(45deg)" }} />,
    label: "Matches",
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: "Events",
  },
  {
    key: "4",
    icon: <TeamOutlined />,
    label: "Teams",
  },
  {
    key: "5",
    icon: <TrophyOutlined />,
    label: "Rewards",
  },
  {
    key: "6",
    icon: <MessageOutlined />,
    label: "Messaging",
  },
  {
    key: "7",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "8",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

export default function SiderPanel({ collapsed, setCollapsed }) {
  return (
    <Sider
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
      width={250}
      style={{
        backgroundColor: "#0c3f65",
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {collapsed ? (
        <div className="demo-logo-vertical__collapsed">
          <img src={logoRounded} alt="logo" width={100}></img>
        </div>
      ) : (
        <div className="demo-logo-vertical">
          <img src={logo} alt="logo" width={100} height={35}></img>
        </div>
      )}
      <Menu
        style={{ backgroundColor: "#0c3f65", fontSize: "20px", color: "white" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={navItems}
      />
    </Sider>
  );
}
