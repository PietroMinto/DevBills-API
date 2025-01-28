import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionsRepository } from "../database/repositories/transactions.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { TransactionModel } from "../database/schemas/transactions.schema";
import { TransactionsService } from "../services/transactions-service";

export class TransactionFactory {
	private static TransactionService: TransactionsService;

	static getServiceInstance() {
		if (this.TransactionService) {
			return this.TransactionService;
		}

		const repository = new TransactionsRepository(TransactionModel);
		const categoriesRepository = new CategoriesRepository(CategoryModel);
		const service = new TransactionsService(repository, categoriesRepository);

		this.TransactionService = service;

		return service;
	}
}
