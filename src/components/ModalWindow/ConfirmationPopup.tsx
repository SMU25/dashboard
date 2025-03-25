import React, { FC } from "react";
import { ModalWindow } from "@/components/ModalWindow";
import { Confirmation } from "@/components/ModalWindow/templates/Confirmation";
import { IModal } from "@/components/ModalWindow/types";

interface Props extends Pick<IModal, "isOpen" | "onClose"> {
  onConfirm: VoidFunction;
}

export const ConfirmationPopup: FC<Props> = ({
  isOpen,
  onConfirm,
  onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    onClose={onClose}
    isActiveCloseClickOutside={false}
    isActivePortal
  >
    <div className="relative flex justify-center items-center px-14">
      <h3 className="py-2 px-4 text-2xl font-semibold">
        Are you confirm this action ?
      </h3>
    </div>

    <Confirmation
      className="mt-5"
      confirmButtonName="Okay"
      cancelButtonName="Cancel"
      onConfirm={onConfirm}
      onClose={onClose}
    />
  </ModalWindow>
);
