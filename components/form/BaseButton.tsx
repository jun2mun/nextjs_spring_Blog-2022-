import clsx from "clsx";
import React from "react";
import useLock from "../../utils/hooks/useLock.hook";

export interface BaseButtonProps
    extends BaseProps,
        Pick<React.AllHTMLAttributes<HTMLButtonElement>,"disabled" | "onClick">,
        Pick<React.ButtonHTMLAttributes<HTMLButtonElement>,"type"> {
            readonly children?: React.ReactNode;

            readonly loading?: boolean;
        }

const BaseButton = (
    props: BaseButtonProps,
    ref?: React.Ref<HTMLButtonElement>
) : JSX.Element => {
    const {
        children,
        type = "button",
        disabled,
        className,
        onClick,
        loading
    } = props;

    const [lock, protectHandler] = useLock();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) =>{
        if (lock || disabled || loading){
            return;
        }

        protectHandler(() => {
            onClick?.call(null, event)
        });
    }

    return (
        <button
            ref={ref}
            type={type}
            className={clsx(
                "flex-center",
                "text-center",
                "text-white",
                "btn",
                "normal",
                disabled && "disabled",
                loading && "loading",
                className
            )}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default React.forwardRef(BaseButton);