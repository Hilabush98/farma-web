import { useState } from "react";
import { CardComponent, TableComponent } from "../../../components";
import { Col, Row } from "antd";

const RTLOGS = () => {
  const [dataInfo, setDataInfo] = useState(null);
  return (
    <>
      <h1>aa</h1>
      <Row gutter={[10, 20]}>
        <Col span={8}>
          <CardComponent
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
          />
        </Col>

        <Col span={24}>
          <TableComponent
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
              },
            ]}
            data={[]}
          />
        </Col>
      </Row>
    </>
  );
};
export default RTLOGS;
