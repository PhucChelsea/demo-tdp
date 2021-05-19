import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, List, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneTodo } from "../actions/index";

const ListWorks = () => {
  const data = useSelector((state) => state.todo.listWorks);

  const dispatch = useDispatch();
  const deleted = (id) => {
    dispatch(deleteTodo(id));
  };
  const finish = (id) => {
    dispatch(doneTodo(id));
  };
  const styleFinish = {
    textDecoration: "line-through",
    color: "red",
  };
  console.log(data);
  return (
    <Row style={{ margin: "20px 0px" }}>
      <Col span={12} offset={6}>
        <List
          itemLayout="horizontal"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Checkbox onClick={() => finish(item.id)} />}
                title={item.name}
                style={item.done ? styleFinish : null}
              />
              <div>
                <DeleteOutlined onClick={() => deleted(item.id)} />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default React.memo(ListWorks);
