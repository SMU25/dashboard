import React, { FC } from "react";
import { IUser } from "@/@types/users";
import { ModalWindow } from "../ModalWindow";
import { IModal } from "../ModalWindow/types";
import { EditUserForm } from "./EditUserForm";

interface Props extends IModal {
  user: IUser;
}

export const EditUserModal: FC<Props> = ({ user, ...props }) => (
  <ModalWindow {...props}>
    <EditUserForm user={user} />
  </ModalWindow>
);
