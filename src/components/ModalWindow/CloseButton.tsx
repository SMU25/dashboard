import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import closeIcon from "@/assets/icons/x-mark.svg";

const CLOSE_ICON_SIZE = 32;

interface Props {
  className?: string;
  onClose: VoidFunction;
}

export const CloseButton: FC<Props> = ({ className, onClose }) => (
  <button
    className={cn("bg-white rounded-lg z-30", className)}
    type="button"
    onClick={onClose}
  >
    <Image
      width={CLOSE_ICON_SIZE}
      height={CLOSE_ICON_SIZE}
      src={closeIcon}
      alt="close"
    />
  </button>
);
