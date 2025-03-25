import { z } from "zod";

export const EMAIL_VALIDATION_SCHEMA = z
  .string()
  .min(2, "Email is required")
  .email("Incorrect email");

export const PASSWORD_VALIDATION_SCHEMA = z
  .string()
  .min(6, "Password must contain at least 6 characters");

export const NAME_VALIDATION_SCHEMA = z.string().min(2, "Name is required");
