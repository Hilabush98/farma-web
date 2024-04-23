import { useState } from "react";
import { CardComponent, TableComponent } from "../../../components";
import { Col, Row } from "antd";

const RTLOGS = () => {
  const [dataInfo, setDataInfo] = useState(null);
  const data1 = [
    {
      key: '1',
      name: 'TEST1',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'TEST1',
      age: 42,
      address: '10 Downing Street',
    },

  ];

  const data2 = [
    {
      key: '1',
      name: 'TEST 2 ',
      age: 32,
      address: '10 ASDA Street',
    },
    {
      key: '2',
      name: 'TEST 2',
      age: 42,
      address: '10 ASDASD 1',
    },
  ];
  const data3 = [
    {
      key: '1',
      name: 'MIKE 3',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'JHON 3',
      age: 42,
      address: '10 Downing Street',
    },
  ];
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
            onClickCard={()=>setDataInfo(data1)}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
            onClickCard={()=>setDataInfo(data2)}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
            onClickCard={()=>setDataInfo(data3)}
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
            data={dataInfo}
          />
        </Col>
      </Row>
    </>
  );
};
export default RTLOGS;
