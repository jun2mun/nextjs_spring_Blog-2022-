import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import BaseTextInput, { BaseTextInputProps } from "./BaseTextInput";

export interface BaseFormTextFieldProps
    extends BaseFormFieldProps,
        Pick<
            BaseTextInputProps,
            | "type"
            | "variant"
            | "label"
            | "labelProps"
            | "inputProps"
            | "maxLength"
            | "formatter"
            | "onChange"
        > {
            readonly disabledWhen?: (context: any) => boolean;

            readonly helperProps?: BaseProps & {
                readonly show?: boolean;
                readonly text?: string;
            }
        }

const BaseFormTextField = (props: BaseFormTextFieldProps) => {
    const {
        id,
        style,
        required,
        name,
        className,
        helperProps,
        value: _value,
        onChange: _onChange,
        disabled,
        disabledWhen,
        ...textInputProps
    } = props;

    const {register, handleSubmit} = useForm();
    
/*
    const formik = useFormikContext();

    const [field, meta, helper] = useField({ name });
  
    const { value, onChange, onBlur, checked, multiple } = field;
  
    const { initialTouched, touched, error, initialError, initialValue } = meta;
  
    const { setError, setTouched, setValue } = helper;
 */ 
    React.useEffect(() => {
      if (_value != null) {
        //setValue(_value);
      }
    }, [_value]);

    return (
        <div className={className}>
            <BaseTextInput
                name={name}
                //value={value}
                onChange={(evt) => {
                    //onChange(evt);

                    _onChange?.call(null,evt);
                }}
                //onBlur={onBlur}
                autoComplete="off"
                disabled={disabled || disabledWhen?.call(null,"Test")}
                {...textInputProps}
            />
            {helperProps && !disabled && (
                <div className="relative h-4 md:h-5">
                    <p
                        style={helperProps.style}
                        className={clsx("base-helper-text", helperProps.className)}
                    >
                        {/*(touched || helperProps.show) && (error || helperProps.text)*/}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BaseFormTextField;
