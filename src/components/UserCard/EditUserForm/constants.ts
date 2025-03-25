import { z } from "zod";
import { NAME_VALIDATION_SCHEMA } from "@/validation";

export const EDIT_USER_VALIDATION_SCHEMA = z.object({
  name: NAME_VALIDATION_SCHEMA,
  job: z.string(),
});
