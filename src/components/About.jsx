import React from "react";
import { Row, Col, Avatar } from "antd";

const About = () => {
  return (
    <div>
      <Row>
        <Col span={8} xs={24} sm={24} md={12} lg={4} xl={8}>
          <img
            alt="about"
            width={315}
            height={175}
            src="https://images.pexels.com/photos/1399288/pexels-photo-1399288.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
        </Col>
        <Col span={8} xs={24} sm={24} md={12} lg={20} xl={16}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
};

export default About;
