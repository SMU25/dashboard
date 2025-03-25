import React, { FC } from "react";
import cn from "classnames";

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => (
  <input
    className={cn("w-full p-2 border rounded focus:border-blue-500", className)}
    {...props}
  />
);
