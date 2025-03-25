import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME } from "./actions";
import { loginUserReducer } from "./reducers";

export interface AuthState {
  isLoading: boolean;
  isAuthorized: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthorized: false,
};

export const { reducer: auth } = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    loginUserReducer(builder);
  },
});
