import { z } from "zod";
import {
  EMAIL_VALIDATION_SCHEMA,
  PASSWORD_VALIDATION_SCHEMA,
} from "@/validation";

export const LOGIN_VALIDATION_SCHEMA = z.object({
  email: EMAIL_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
});
