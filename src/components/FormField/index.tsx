import React, { FC, ReactNode } from "react";
import { Label } from "./Label";
import { Error } from "../Error";

interface Props {
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  label?: ReactNode;
  error?: ReactNode;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  errorClassName,
  label,
  error,
}) => (
  <div className={className}>
    <Label className={labelClassName}>{label}</Label>
    {children}
    <Error className={errorClassName}> {error}</Error>
  </div>
);
