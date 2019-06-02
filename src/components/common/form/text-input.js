import React from "react";

import TextInput from "../text-input";

type Props = {
  input: {
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    value: any
  },
  meta: {
    //active: boolean,
    //dirty: boolean,
    //error?: ?String,
    //invalid: boolean,
    //pristine: boolean,
    //submitting: boolean,
    //submitFailed: boolean,
    //touched: boolean,
    //valid: boolean,
    //visited: boolean,
    //warning?: ?String
  }
};

export default ({
  input: { onBlur, onChange, onFocus, value },
  ...props
}: Props) => <TextInput onChangeText={onChange} value={value} {...props} />;
