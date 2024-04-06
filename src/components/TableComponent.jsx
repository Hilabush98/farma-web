/* eslint-disable react/prop-types */
import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
  console.log(columns);
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={10} />
    </>
  );
};
export default TableComponent;
