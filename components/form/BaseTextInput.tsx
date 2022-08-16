import React from "react";
import clsx from "clsx";

export interface BaseTextInputProps
    extends BaseInputProps,
        Pick<
            React.HTMLProps<HTMLInputElement>,
            "type" | "maxLength" | "autoComplete"
        > {

            readonly variant?: "underlined" | "outlined" | "filled";

            readonly value?: string | number;

            readonly label?: React.ReactNode; //?

            readonly labelProps?: BaseProps;

            readonly inputProps?: BaseProps;

            readonly startAdornment?: React.ReactNode;

            readonly endAdornment?: React.ReactNode;

            readonly formatter?: (value: string | number | undefined) => typeof value;

            readonly onEnterPress?: (value: string) => void;

            readonly onBackspacePress?: (value: string) => void;
        }

const BaseTextInput = (
    props: BaseTextInputProps, // 리액트에서도 DOM을 선택해 직접 접근
    ref?: React.Ref<HTMLInputElement>
) : JSX.Element => { //JSX.Element 는 <div> 이런거 의미??인거 같음
    const {
        id,
        style,
        variant,
        name,
        value = "",
        type,
        label,
        labelProps,
        inputProps,
        startAdornment: prefix,
        endAdornment: suffix,
        className,
        onChange,
        onBlur,
        onEnterPress,
        onBackspacePress,
        placeholder,
        autoComplete,
        maxLength,
        disabled,
        readOnly,
        formatter = (v) => v,
    } = props
    return (
        <>
            <div
                className={clsx(
                    "w-full space-y-2 md:space-y-0 md:space-x-2 md:flex md:items-center text-left whitespace-nowrap",
                    className
                )}
            >
                {label && (
                    <label className={clsx("base-label", labelProps?.className)}>
                        {label}
                    </label>
                )}
                <div className={clsx("relative w-full flex items-end")}>
                    {prefix && <div className="absolute left-0">{prefix}</div>}
                    <input
                        ref={ref}
                        className={clsx(
                            "base-text-input",
                            "placeholder:text-red-400",
                            readOnly && "readonly",
                            variant === "underlined" && "underlined",
                            variant === "outlined" && "outlined",
                            variant === "filled" && "filled",
                            inputProps?.className
                        )}
                        name={name}
                        value={formatter?.call(null, value)}
                        onChange={onChange}
                        onBlur={onBlur}
                        type={type}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        maxLength={maxLength}
                        disabled={disabled}
                        readOnly={readOnly}
                        onKeyDown={(evt)=>{
                            if (evt.key === "Enter") {
                                onEnterPress?.call(null, String(value));
                            }

                            if (evt.key == "Backspace") {
                                onBackspacePress?.call(null, String(value));
                            }
                        }}
                        />
                        {suffix && <div className="absolute right-0">{suffix}</div>}
                </div>
            </div>
        </>
    )
};

export default React.forwardRef(BaseTextInput);