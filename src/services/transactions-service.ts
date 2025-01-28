import { StatusCodes } from "http-status-codes";
import type { CategoriesRepository } from "../database/repositories/categories.repository";
import type { TransactionsRepository } from "../database/repositories/transactions.repository";
import type { CreateTransactionDTO } from "../dtos/transactions.dto";
import { Transaction } from "../entities/transactions.entity";
import { AppError } from "../errors/app.error";

export class TransactionsService {
	constructor(
		private transactionsRepository: TransactionsRepository,
		private categoriesRepository: CategoriesRepository,
	) {}

	async create({
		title,
		date,
		amount,
		type,
		categoryId,
	}: CreateTransactionDTO): Promise<Transaction> {
		const category = await this.categoriesRepository.findById(categoryId);

		if (!category) {
			throw new AppError("Category does not exists", StatusCodes.NOT_FOUND);
		}

		const transaction = new Transaction({
			title,
			type,
			date,
			amount,
			category,
		});

		const createdTransaction =
			await this.transactionsRepository.create(transaction);

		return createdTransaction;
	}
}
