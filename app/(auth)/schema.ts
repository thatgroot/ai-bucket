import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(2).max(50).email("This is not a valid email."),
  password: z.string().min(8).max(64),
  flow: z.enum(["signIn", "signUp"]),
});

export type FormSchema = typeof formSchema;
