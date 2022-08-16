import React from "react";
import clsx from "clsx";

export interface BaseFormProps<T>
    extends Pick<React.FormHTMLAttributes<HTMLFormElement>,"className">
{
    readonly initialValues : T;

    readonly validationSchema?: any | (() => any);

    readonly onSubmit?: (values: T) => void | Promise<void>;

    readonly resetAfterSubmit?: boolean;

    readonly formProps?: {
        readonly className?: string;
    }
}

const BaseForm = <T,>(props: React.PropsWithChildren<BaseFormProps<T>>) => {
    const {
        initialValues,
        onSubmit,
        resetAfterSubmit,
        validationSchema,
        className,
        children,
        formProps
    } = props;

    const submit = async (values : T) => { // values Type 수정 TODO
        await onSubmit?.call(null,values)
    }
    return (
        <div className={className}>

        </div>   
    )
}

export default BaseForm;