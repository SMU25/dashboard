import React, { useCallback, FC } from "react";
import cn from "classnames";
import { Button } from "@/components/Button";
import { ButtonVariants } from "@/components/Button/types";

const DEFAULT_BUTTON_CLASSNAME = "w-full h-10 p-3 text-base";

export interface Props {
  className?: string;
  confirmButtonName?: string;
  cancelButtonName?: string;
  confirmButtonVariant?: ButtonVariants;
  cancelButtonVariant?: ButtonVariants;
  isEnableCloseAfterConfirm?: boolean;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
}

export const Confirmation: FC<Props> = ({
  className,
  confirmButtonName,
  cancelButtonName,
  confirmButtonVariant = ButtonVariants.PRIMARY,
  cancelButtonVariant = ButtonVariants.RED_SECONDARY,
  isEnableCloseAfterConfirm = true,
  onConfirm,
  onClose,
}) => {
  const onApprove = useCallback(() => {
    onConfirm();

    if (isEnableCloseAfterConfirm) {
      onClose();
    }
  }, [onConfirm, onClose, isEnableCloseAfterConfirm]);

  return (
    <div className={cn("flex justify-center items-center gap-5", className)}>
      <Button
        className={cn(
          "hover:bg-opacity-80 hover:border-opacity-80",
          DEFAULT_BUTTON_CLASSNAME
        )}
        variant={cancelButtonVariant}
        onClick={onClose}
      >
        {cancelButtonName}
      </Button>
      <Button
        className={DEFAULT_BUTTON_CLASSNAME}
        variant={confirmButtonVariant}
        onClick={onApprove}
      >
        {confirmButtonName}
      </Button>
    </div>
  );
};
