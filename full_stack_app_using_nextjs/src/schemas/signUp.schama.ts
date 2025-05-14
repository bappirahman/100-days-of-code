import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "User name must be minimum of 2 characters")
  .max(20, "User name can't exceed of 20 characters")
  .regex(
    /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/,
    "User name Can only contain alphanumeric characters and the following special characters: dot (.), underscore(_) and dash (-). The special characters cannot appear more than once consecutively or combined."
  );

export const signUpSchema = z.object({
  usename: userNameValidation,
  email: z
    .string()
    .email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password can't exceed 32 characters"),
  
});
