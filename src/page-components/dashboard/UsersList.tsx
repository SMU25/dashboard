import React, { FC } from "react";
import { useGetUsersQuery } from "@/redux/users/api";
import { UserCard } from "@/components/UserCard";
import { ErrorMessage } from "@/components/ErrorMessage";

const ITEMS_PER_PAGE = 12;

export const UsersList: FC = () => {
  const { data, error, isLoading } = useGetUsersQuery({
    page: 1,
    perPage: ITEMS_PER_PAGE,
  });

  return (
    <section>
      <div className="container py-10">
        <h3 className="text-xl font-semibold">Users List:</h3>

        <div className="mt-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.length && (
              <div className="grid grid-cols-2 gap-5">
                {data.map((user) => (
                  <UserCard key={user.id} {...user} />
                ))}
              </div>
            )
          )}

          {error && <ErrorMessage>Error fetching users</ErrorMessage>}
        </div>
      </div>
    </section>
  );
};
