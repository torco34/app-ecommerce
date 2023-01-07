import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FormLogIn } from "../components/FormLogIn";
const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container border align-content-center">
      <FormLogIn />
    </div>
  );
};
export { SignUp };
