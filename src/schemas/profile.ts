import {z} from "zod";

export const profileSchema = z.object({
  about: z.string(),
  phone: z.string(),
  country: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
});
export type ProfileSchema = z.infer<typeof profileSchema>;