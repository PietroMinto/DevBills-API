import { z } from "zod";

export const createCategorySchema = {
	title: z.string(),
	color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
};

const createCategoryObject = z.object(createCategorySchema);

export type CreatecategoryDto = z.infer<typeof createCategoryObject>;
