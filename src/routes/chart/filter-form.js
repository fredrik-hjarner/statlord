import React from "react";
import { reduxForm, Field } from "redux-form";

import { TextInput } from "components";

const FilterForm = () => {
  return <Field name="domain" component={TextInput} />;
};

const onChange = () => {};

export default FilterForm |> reduxForm({ form: "chart-filter-form", onChange });
