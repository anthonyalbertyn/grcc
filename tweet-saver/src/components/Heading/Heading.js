import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const Heading = ({ level, text }) => {
  return (
    <Title className="heading" level={level}>
      {text}
    </Title>
  );
};

export default Heading;
