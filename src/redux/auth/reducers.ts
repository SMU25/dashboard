import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { loginUserAsync } from "./actions";
import { AuthState } from "./slice";

type ActionReducerMapBuilderWithAuthState = ActionReducerMapBuilder<AuthState>;

export const loginUserReducer = (
  builder: ActionReducerMapBuilderWithAuthState
) => {
  builder.addCase(loginUserAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(loginUserAsync.fulfilled, (state) => {
    state.isLoading = false;
    state.isAuthorized = true;
  });

  builder.addCase(loginUserAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
