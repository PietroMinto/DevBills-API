import { StatusCodes } from "http-status-codes";
import type { CreatecategoryDto } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";
import { AppError } from "../errors/app.error";
import type { CategoriesRepository } from "../repositories/categories.repository";

export class CategoriesService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	async create({ title, color }: CreatecategoryDto): Promise<Category> {
		const foundCategory = await this.categoriesRepository.findyByTitle(title);

		if (foundCategory) {
			throw new AppError("Category already exists.", StatusCodes.BAD_REQUEST);
		}

		const category = new Category({
			title,
			color,
		});

		const createdCategory = await this.categoriesRepository.create(category);

		return createdCategory;
	}
}
