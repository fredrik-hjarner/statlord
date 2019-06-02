import React from "react";
import { reduxForm, Field } from "redux-form";

import { TextInputField } from "components";

type Props = {
  onDomainChange: Function
};

const FilterForm = () => {
  return <Field name="domain" component={TextInputField} />;
};

const onChange = ({ domain }, dispatch, props: Props) =>
  props.onDomainChange(domain);

export default FilterForm |> reduxForm({ form: "chart-filter-form", onChange });
