import { z } from "zod";
import { LOGIN_VALIDATION_SCHEMA } from "./constants";

export type LoginSchemaType = z.infer<typeof LOGIN_VALIDATION_SCHEMA>;
