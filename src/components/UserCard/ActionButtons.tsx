import React, { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useModal } from "@/hooks/useModal";
import { useDeleteUserMutation } from "@/redux/users/api";
import { IUser } from "@/@types/users";
import editIcon from "@/assets/icons/pencil.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";

const ConfirmationPopup = dynamic(
  () =>
    import("@/components/ModalWindow/ConfirmationPopup").then(
      ({ ConfirmationPopup }) => ConfirmationPopup
    ),
  { ssr: false }
);

const DEFAULT_BUTTON_CLASSNAME = "w-10 h-10";

const ICON_SIZE = 20;

export const ActionButtons: FC<Pick<IUser, "id">> = ({ id }) => {
  const editUserPopup = useModal();
  const deleteUserPopup = useModal();

  const [deleteUser] = useDeleteUserMutation();
  const onDelete = () => deleteUser(id);

  return (
    <>
      <div className="flex items-center gap-3">
        <Button
          className={DEFAULT_BUTTON_CLASSNAME}
          variant={ButtonVariants.PRIMARY}
        >
          <Image
            width={ICON_SIZE}
            height={ICON_SIZE}
            src={editIcon}
            alt="edit"
            unoptimized
          />
        </Button>

        <Button
          className={DEFAULT_BUTTON_CLASSNAME}
          variant={ButtonVariants.RED}
          onClick={deleteUserPopup.onOpen}
        >
          <Image
            width={ICON_SIZE}
            height={ICON_SIZE}
            src={deleteIcon}
            alt="delete"
            unoptimized
          />
        </Button>
      </div>

      {deleteUserPopup.isOpen && (
        <ConfirmationPopup {...deleteUserPopup} onConfirm={onDelete} />
      )}
    </>
  );
};
