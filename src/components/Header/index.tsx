import Link from "next/link";
import React, { FC } from "react";
import { PATHNAMES } from "@/constants/routes";

export const Header: FC = () => {
  return (
    <header className="shadow-xl py-2">
      <div className="container flex justify-between items-center gap-10">
        <Link href={PATHNAMES.HOME}>
          <h1 className="text-3xl font-semibold">Logo</h1>
        </Link>

        <Link
          className="duration-150 hover:text-sky-500"
          href={PATHNAMES.DASHBOARD}
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
};
