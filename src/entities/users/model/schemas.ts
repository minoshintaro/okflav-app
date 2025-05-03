import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
});

export const userTableSchema = userSchema.extend({
  id: z.number(),
});

export type User = z.infer<typeof userSchema>;
export type UserResponse = z.infer<typeof userTableSchema>;
