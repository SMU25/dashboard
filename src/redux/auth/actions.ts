import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { instance } from "@/services/api-client";
import { NotificationService } from "@/helpers/notifications";
import { PATHNAMES } from "@/constants/routes";
import { ACCES_TOKEN } from "@/constants/cookiesKeys";
import { ILoginValues, IAuthTokens } from "@/@types/auth";
import { ErrorResponse } from "@/@types/api";

export const AUTH_SLICE_NAME = "auth";

export const loginUserAsync = createAsyncThunk<IAuthTokens, ILoginValues>(
  `${AUTH_SLICE_NAME}/fetchLogin`,
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await instance.post<IAuthTokens>("/login", values);

      Cookies.set(ACCES_TOKEN, data.access_token);

      window.location.href = PATHNAMES.DASHBOARD;

      return data;
    } catch (error) {
      const { response } = error as ErrorResponse;
      const errorText = response?.data?.error || "Failed login!";

      NotificationService.error(errorText);

      return rejectWithValue(errorText);
    }
  }
);
