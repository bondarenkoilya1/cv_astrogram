import { z } from "zod";

const productSchema = z.object({
  type: z.enum(["main", "additional", "gift"]),
  subtitle: z.string().min(1),
  title: z.string().min(1),
  isChecked: z.boolean()
});

export const mainFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  policy: z.boolean().refine((value) => value === true),
  sex: z.string().min(1),
  addDiscount: z.boolean().optional().default(false),
  productsMain: z
    .array(productSchema)
    .nonempty()
    .refine((products) =>
      products.some((p) => (p.type === "main" || p.type === "gift") && p.isChecked)
    ),
  productsAdditional: z.array(productSchema).optional()
});
