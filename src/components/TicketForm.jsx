import { Form, Checkbox, Input, DatePicker } from "antd";

const TicketForm = ({ themeConfig }) => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          color: themeConfig.token.colorText,
          fontSize: "50px",
        }}
      >
        Create a new ticket
      </div>
      <Form
        style={{ maxWidth: 600 }}
        layout="horizontal"
        labelCol={{ span: 4 }}
      >
        <Form.Item label="Now" name="disabled" valuePropName="checked">
          <Checkbox>Information</Checkbox>
        </Form.Item>
        <Form.Item label="Tittle">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};
export default TicketForm;
