import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be at most 20 characters");

export const singUpSchema = z.object({
  username: usernameSchema,
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  avatar: z.string(),
  assignTo: z.string(),
});
