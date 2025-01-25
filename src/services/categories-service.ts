import type { CreatecategoryDto } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";
import type { CategoriesRepository } from "../repositories/categories.repository";

export class CategoriesService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	async create({ title, color }: CreatecategoryDto): Promise<Category> {
		const category = new Category({
			title,
			color,
		});

		const createdCategory = await this.categoriesRepository.create(category);

		return createdCategory;
	}
}
