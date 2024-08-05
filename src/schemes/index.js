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

export const paymentMethodSchema = z.object({
  paymentMethod: z.string().min(1)
});

// birth form
const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
const timePattern = /^\d{2}:\d{2}$/;

export const birthFormSchema = z
  .object({
    birthday: z.string().regex(datePattern),
    birthAddress: z.string().min(1).max(48),
    birthCoordinates: z.string().optional(),
    birthtime: z.string().optional(),
    birthtimeRadio: z.boolean().optional()
  })
  .refine(
    (data) => {
      return data.birthtimeRadio || (data.birthtime && timePattern.test(data.birthtime));
    },
    {
      message:
        "Either 'birthtime' must match the time pattern or 'birthtimeRadio' must be checked.",
      path: ["birthtime"]
    }
  );
