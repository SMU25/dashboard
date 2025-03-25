import React, { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/Button";
import { ButtonVariants } from "@/components/Button/types";

export interface Props {
  className?: string;
  approvalButtonClassName?: string;
  approvalButtonName?: string;
  approvalButtonVariant?: ButtonVariants;
  onClose: VoidFunction;
}

export const Alert: FC<Props> = ({
  className,
  approvalButtonName = "Okay",
  approvalButtonClassName,
  approvalButtonVariant = ButtonVariants.PRIMARY,
  onClose,
}) => (
  <div className={cn("flex-col", className)}>
    <Button
      className={approvalButtonClassName}
      variant={approvalButtonVariant}
      onClick={onClose}
    >
      {approvalButtonName}
    </Button>
  </div>
);
