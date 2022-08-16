import clsx from "clsx";
import BaseButton, { BaseButtonProps } from "./BaseButton";

export interface BaseFormButtonProps extends BaseButtonProps {
    readonly autoDisabled?: boolean;

    readonly fullWidth?: boolean;
}

const BaseFormButton = (props: BaseFormButtonProps) : JSX.Element => {
    const {
        children,
        autoDisabled,
        fullWidth,
        className,
        ...baseButtonProps
    } = props;

    return(
        <BaseButton
            type="submit"
            className={clsx(fullWidth && "w-full", className)}
            //disabled= {}
            {...baseButtonProps}
        >
            {children}
        </BaseButton>
    )
}

export default BaseFormButton;