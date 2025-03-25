import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/@types/users";
import usersApi from "./api";

interface UsersState {
  users: IUser[] | null;
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        usersApi.endpoints.updateUser.matchFulfilled,
        (state, { payload, meta }) => {
          if (state?.users) {
            const updatedUserIndex = state.users.findIndex(
              (user) => user.id === meta.arg.id
            );

            if (updatedUserIndex !== -1) {
              const currentUser = state.users[updatedUserIndex];

              state.users[updatedUserIndex] = { ...currentUser, ...payload };
            }
          }
        }
      )
      .addMatcher(
        usersApi.endpoints.deleteUser.matchFulfilled,
        (state, { meta }) => {
          if (state?.users) {
            state.users = state.users.filter((user) => user.id !== meta.arg.id);
          }
        }
      );
  },
});

export default usersSlice.reducer;
