import React from "react";
import { Card, Row, Col } from "antd";

const Global = () => {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={8}>
        <Card title="Confirmed" bordered={true}>
          <p>NewConfirmed: 454545</p>
          <p>TotalConfirmed: 454545</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Deaths" bordered={true}>
          <p>NewDeaths: 21324</p>
          <p>TotalDeaths: 234335</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Recovered" bordered={true}>
          <p>NewRecovered: 2323</p>
          <p>TotalRecovered: 31232</p>
        </Card>
      </Col>
    </Row>
  );
};
export default React.memo(Global);
