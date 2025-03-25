import React, { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IUser } from "@/@types/users";
import atIcon from "@/assets/icons/at.svg";
import { ActionButtons } from "./ActionButtons";
import { Avatar } from "../Avatar";

const AT_ICON_SIZE = 18;

export const UserCard: FC<IUser> = (props) => {
  const { first_name, last_name, email, avatar } = props;

  const fullName = `${first_name} ${last_name}`;

  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-2 p-2 rounded-xl shadow-dark-card">
      <div className="flex items-center gap-2">
        <Avatar avatarUrl={avatar} altText={first_name} />

        <div>
          <h4 className="text-lg font-semibold line-clamp-1" title={fullName}>
            {fullName}
          </h4>
          <span className="flex items-center gap-1">
            <Image
              src={atIcon}
              width={AT_ICON_SIZE}
              height={AT_ICON_SIZE}
              alt="@"
              unoptimized
            />
            <Link
              className="underline-offset-4 hover:underline"
              href={`mailto:${email}`}
            >
              <span className="text-gray-600 line-clamp-1" title={email}>
                {email}
              </span>
            </Link>
          </span>
        </div>
      </div>

      <ActionButtons user={props} setIsDeleted={setIsDeleted} />
    </div>
  );
};
