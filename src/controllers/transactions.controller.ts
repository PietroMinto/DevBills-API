import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { CreateTransactionDTO } from "../dtos/transactions.dto";
import type { TransactionsService } from "../services/transactions-service";

export class TransactionsController {
	constructor(private transactionService: TransactionsService) {}

	create = async (
		req: Request<unknown, unknown, CreateTransactionDTO>,
		res: Response,
		next: NextFunction,
	) => {
		try {
			const { title, amount, date, type, categoryId } = req.body;

			const result = await this.transactionService.create({
				title,
				amount,
				date,
				type,
				categoryId,
			});

			return res.status(StatusCodes.CREATED).json(result);
		} catch (err) {
			next(err);
		}
	};
}
