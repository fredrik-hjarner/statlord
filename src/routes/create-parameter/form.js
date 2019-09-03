import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { TextInputField } from "components";
import { create } from "state-management/parameter";

type Props = {
  create: Function
};

const Component = () => {
  return <Field name="name" component={TextInputField} />;
};

const onSubmit = ({ name }, dispatch, props: Props) => props.create({ name });

export default Component
  |> reduxForm({ form: "create-parameter-form", onSubmit })
  |> connect(
    null,
    { create }
  );
