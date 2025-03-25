import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Label: FC<Props> = ({ children, className }) => (
  <label className={cn("text-sm font-medium", className)}>{children}</label>
);
