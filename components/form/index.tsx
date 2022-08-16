import clsx from "clsx";
import React from "react";
import BaseForm, { BaseFormProps } from "./BaseForm";

export interface BaseFormIndexProps<T>
    extends Partial<BaseFormProps<T>> {}


const BaseFormIndex = <T,>(
    props: React.PropsWithChildren<BaseFormIndexProps<T>>
) => {
    const {
        children,
        className,
        initialValues = {} as T,
        onSubmit = () => new Promise(()=>{}),
        ...formProps
    } = props

    return (
        // wrap
        <div className={clsx("relative",className)}>
            {/* form */}
            <BaseForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                {...formProps}
            >
                {children}
            </BaseForm>
        </div>
    )
}
export default BaseFormIndex;