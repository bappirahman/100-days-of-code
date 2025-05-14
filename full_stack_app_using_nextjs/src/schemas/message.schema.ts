import { z } from "zod";

export const messaageSchema = z.object({
  content: z.string().max(300, "Content must be no longer than 300 characters"),
});
