import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUpdatedUserResponse, IUser, IUsersResponse } from "@/@types/users";

interface GetUsersParams {
  page?: number;
  perPage?: number;
}

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], GetUsersParams>({
      query: ({ page = 1, perPage = 12 }) =>
        `/users?page=${page}&per_page=${perPage}`,
      transformResponse: (response: IUsersResponse) => response.data,
    }),

    updateUser: builder.mutation<IUser, IUpdatedUserResponse>({
      query: ({ id, name, job }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { name, job },
      }),
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;

export default usersApi;
