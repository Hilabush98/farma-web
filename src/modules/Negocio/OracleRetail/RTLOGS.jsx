import { useState } from "react";
import { CardComponent, TableComponent } from "../../../components";
import { Col, Row } from "antd";

const RTLOGS = () => {
  const [dataInfo, setDataInfo] = useState([]);
  return (
    <>
      <Row gutter={[10, 20]}>
        <Col span={8}>
          <CardComponent
          onClickCard={()=>setDataInfo([
             {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street'
            }
          ])}
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
          />
        </Col>
        <Col span={8}>
          <CardComponent
          onClickCard={()=>setDataInfo([])}
            tittle={"Hola Mundo"}
            value={"2"}
            typeCard="statistic"
            suffix={"%"}
            prefix={"$"}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            onClickCard={()=>setDataInfo([
              {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street'
              }, {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
              }
            ])}
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
            data={dataInfo}
          />
        </Col>
      </Row>
    </>
  );
};
export default RTLOGS;
