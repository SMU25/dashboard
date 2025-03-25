import { ReactNode } from "react";

export interface IModal {
  children?: ReactNode;
  isOpen: boolean;
  isActivePortal?: boolean;
  isShownOverlay?: boolean;
  isActiveCloseClickOutside?: boolean;
  overlayClassName?: string;
  className?: string;
  onClose: VoidFunction;
}
