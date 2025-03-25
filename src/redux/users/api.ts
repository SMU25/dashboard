import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUpdatedUserResponse, IUser, IUsersResponse } from "@/@types/users";

const TAGS_LIST = [{ type: "Users", id: "LIST" }] as const;

interface GetUsersParams {
  page?: number;
  perPage?: number;
}

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], GetUsersParams>({
      query: ({ page = 1, perPage = 12 }) =>
        `/users?page=${page}&per_page=${perPage}`,
      transformResponse: (response: IUsersResponse) => response.data,
      providesTags: (result) =>
        result
          ? result.map((user) => ({ type: "Users", id: user.id }))
          : TAGS_LIST,
    }),

    updateUser: builder.mutation<IUser, IUpdatedUserResponse>({
      query: ({ id, name, job }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { name, job },
      }),
      invalidatesTags: TAGS_LIST,
    }),

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: TAGS_LIST,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;

export default usersApi;
