import React from "react";
import Form from "react-bootstrap/Form";

const ToggleSwitch = ({ billingPeriod, setter }) => {
  return (
    <Form className="d-flex position-absolute top-0 end-0 switch">
      <div className="monthly-text">Monthly</div>
      <Form.Check
        type="switch"
        id="custom-switch"
        onClick={() => {
          billingPeriod === "monthly" ? setter("yearly") : setter("monthly");
        }}
      />
      Yearly
    </Form>
  );
};

export default ToggleSwitch;
