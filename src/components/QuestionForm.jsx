import React from "react";
import { Form, Input, Button } from "antd";

function QuestionForm({ onFinish, onFinishFailed }) {
  return (
    <div className="QuestionForm">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => onFinish(values)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          name="question"
          rules={[{ required: true, message: "Ingresa tu pregunta" }]}
          className={"QuestionInput"}
        >
          <Input.TextArea placeholder={"¿Te sumás? Compartí tu pregunta acá"} />
        </Form.Item>

        <Form.Item name="personalInfo" className={"QuestionInput"}>
          <Input.TextArea
            placeholder={
              "Si querés dejanos tu nombre, edad y desde dónde estás preguntando."
            }
          />
        </Form.Item>

        <Form.Item className={"SubmitQuestion"}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#873c50", borderColor: "#873c50" }}
          >
            Compartir
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default QuestionForm;
