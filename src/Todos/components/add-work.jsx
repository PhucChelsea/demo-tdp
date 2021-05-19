import React from "react";
import { Row, Col, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const { Search } = Input;
const AddWork = () => {
  const id = useSelector((state) => state.todo.idTodo);
  const dispatch = useDispatch();

  const add = (name) => {
    if (name !== "") {
      dispatch(addTodo(name, id));
    }
  };
  return (
    <Row style={{ marginTop: "30px" }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="input name"
          allowClear
          enterButton="Add"
          size="large"
          onSearch={(val) => add(val)}
        />
      </Col>
    </Row>
  );
};
export default React.memo(AddWork);
