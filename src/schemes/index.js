import { z } from "zod";

export const mainFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  policy: z.boolean().refine((value) => value),
  sex: z.string(),
  addDiscount: z.boolean().optional().default(false)
});
