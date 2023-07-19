import { Button } from "antd";
import React from "react";

const VoteFooter = () => {
  return (
    <div className="footer">
      <Button type="primary">支持</Button>
      <Button type="primary" danger>
        反对
      </Button>
    </div>
  );
};

export default VoteFooter;
