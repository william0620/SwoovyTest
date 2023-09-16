import React, { useState } from "react";
import { Layout } from "antd";
import SiderPanel from "./components/SiderPanel";
import HeaderNav from "./components/HeaderNav";
import ContentPanel from "./components/ContentPanel";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderPanel collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={
          collapsed
            ? { marginLeft: "80px", transitionDuration: "0.2s" }
            : { marginLeft: "250px", transitionDuration: "0.2s" }
        }
      >
        <HeaderNav
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={"#f6f8fb"}
        />
        <ContentPanel colorBgContainer={"#f6f8fb"} />
      </Layout>
    </Layout>
  );
};
export default App;
