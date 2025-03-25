import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsLoading = createSelector(
  selectAuthState,
  (authState) => authState.isLoading
);

export const selectIsAuthorized = createSelector(
  selectAuthState,
  (authState) => authState.isAuthorized
);
