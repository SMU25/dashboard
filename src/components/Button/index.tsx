import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
}

export const Button: FC<Props> = ({
  children,
  className,
  variant = ButtonVariants.DEFAULT,
  ...props
}) => {
  const combinedClassNames = cn(
    "flex justify-center items-center px-2 font-medium rounded transition ease-in-out duration-200 select-none active:translate-y-0.5 active:duration-150 disabled:opacity-50 disabled:active:translate-y-0 disabled:!cursor-not-allowed",
    BUTTON_STYLE_VARIANTS[variant],
    className
  );

  return (
    <button className={combinedClassNames} {...props}>
      {children}
    </button>
  );
};
