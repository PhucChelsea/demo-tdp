import React from "react";
import AddWork from "../components/add-work";
import ListWork from "../components/list-work";
import { Row, Col } from "antd";

const Todo = () => {
  return (
    <Row>
      <Col span={24}>
        <AddWork />
        <ListWork />
      </Col>
    </Row>
  );
};
export default React.memo(Todo);
