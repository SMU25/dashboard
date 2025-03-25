import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";

interface Props {
  className?: string;
  size?: number;
  avatarUrl: string;
  altText?: string;
}

export const Avatar: FC<Props> = ({
  className,
  size = 65,
  avatarUrl,
  altText = "",
}) => (
  <Image
    className={cn("aspect-square object-cover rounded-full", className)}
    width={size}
    height={size}
    src={avatarUrl}
    alt={altText}
  />
);
