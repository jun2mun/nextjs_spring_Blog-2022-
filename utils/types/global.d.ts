import React from "react";

import { WithNonNilKeys } from "./utility.type";

export {};

declare global {
  export interface BaseProps
    extends Pick<React.HTMLProps<any>, "id" | "className" | "style"> {}

  export interface BaseInputProps
    extends BaseProps,
      Pick<
        React.HTMLProps<HTMLInputElement>,
        | "name"
        | "value"
        | "checked"
        // | "onChange"
        | "onClick"
        | "onBlur"
        | "placeholder"
        | "readOnly"
        | "disabled"
      > {
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }

  export interface BaseFormFieldProps
    extends WithNonNilKeys<
      Omit<BaseInputProps, "onChange" | "onBlur">,
      "name"
    > {
    readonly required?: boolean;
  }

  var kakao: any;
}
