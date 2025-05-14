import { z } from "zod";
import { userNameValidation } from "./signUp.schama";

export const signInSchema = z.object({
  identifier: userNameValidation,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password can't exceed 32 characters"),
});
