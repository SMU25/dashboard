import axios from "axios";
import Cookies from "js-cookie";
import { PATHNAMES } from "@/constants/routes";
import { ACCES_TOKEN } from "@/constants/cookiesKeys";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get(ACCES_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove(ACCES_TOKEN);

      if (typeof window !== "undefined") {
        window.location.href = PATHNAMES.LOGIN;
      }
    }

    return Promise.reject(error);
  }
);

export { instance };
