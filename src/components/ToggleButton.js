import React, { useState } from "react";
import { Button } from "antd";

export default function ToggleButton({ clicked, text }) {
  const [onOrOff, setOnOrOff] = useState(clicked);
  return (
    <Button
      type="primary"
      shape="round"
      style={
        onOrOff
          ? { backgroundColor: "#0b3f65", color: "white" }
          : { backgroundColor: "white", color: "black" , border:"1px solid black"}
      }
      onClick={() => setOnOrOff(!onOrOff)}
    >
      {text}
    </Button>
  );
}
