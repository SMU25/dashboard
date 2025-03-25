import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { useClickOutside } from "@/hooks/useClickOutside";
import { MODAL_ROOT_ELEMENT } from "@/constants/rootElements";
import { CloseButton } from "./CloseButton";
import { IModal } from "./types";

export const ModalWindow: FC<IModal> = ({
  children,
  overlayClassName,
  className,
  isOpen,
  isActivePortal,
  isShownOverlay = true,
  isActiveCloseClickOutside = true,
  onClose,
}) => {
  const modalRef = useRef(null);

  const isActiveClickOutside = isOpen && isActiveCloseClickOutside;
  useClickOutside(modalRef, onClose, isActiveClickOutside);

  const component = (
    <div
      className={cn(
        "invisible absolute top-0 left-0 w-full opacity-50 z-30 transition-all duration-300",
        overlayClassName,
        {
          "!visible !opacity-100": isOpen,
          "!fixed h-full bg-black bg-opacity-50 backdrop-blur-sm":
            isShownOverlay,
        }
      )}
    >
      <div
        ref={modalRef}
        className={cn(
          "invisible fixed top-1/2 translate-y-full left-1/2 -translate-x-1/2 scale-0 max-w-3xl w-full bg-white p-3 xs:p-4 sm:p-5 opacity-50 rounded-lg transition-all duration-300 z-30",
          className,
          {
            "!visible !-translate-y-1/2 !scale-100 !opacity-100": isOpen,
          }
        )}
      >
        <div className="flex justify-end w-full">
          <CloseButton onClose={onClose} />
        </div>

        {children}
      </div>
    </div>
  );

  return isActivePortal
    ? createPortal(component, MODAL_ROOT_ELEMENT as Element)
    : component;
};
