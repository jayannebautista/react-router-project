import React from "react";
import { Row, Col } from "antd";
const Resume = () => {
  return (
    <div>
      <Row type="flex">
        <Col span={12} offset={2}>
          <h1 />
          <h2>Education</h2>
          <h3>YOUR SCHOOL</h3>
          <ul>
            <li>Bachelors of Science in Computer Engineering</li>
            <li>Class of 20XX</li>
            <li>GPA: X</li>
          </ul>
          <h2>Work History</h2>
          <h3>YOUR JOB TITLE</h3>
          <ul>
            <li>JOB DESCRIPTION 2</li>
            <li>JOB DESCRIPTION 1</li>
          </ul>
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>React Router</li>
            <li>Node.js</li>
            <li>SKILL</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
