import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Error: FC<Props> = ({ children, className }) => (
  <span className={cn("text-red-500 text-sm", className)}>{children}</span>
);
