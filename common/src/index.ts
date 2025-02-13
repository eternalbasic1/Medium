import z from "zod";

export const signupInput = z.object({
  name: z.string().optional(),
  password: z.string().min(6),
  email: z.string().email(),
});

export const signinInput = z.object({
  password: z.string().min(6),
  email: z.string().email(),
});

export const postInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updatePostInput = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type PostInput = z.infer<typeof postInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
