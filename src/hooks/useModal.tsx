import { useState } from "react";

export const useModal = (isOpenModal: boolean = false) => {
  const [isOpen, setIsOpen] = useState(isOpenModal);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};
