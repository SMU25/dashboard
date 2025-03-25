import { z } from "zod";
import { EDIT_USER_VALIDATION_SCHEMA } from "./constants";

export type EditUserSchemaType = z.infer<typeof EDIT_USER_VALIDATION_SCHEMA>;
