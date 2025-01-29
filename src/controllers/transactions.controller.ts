import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type {
	CreateTransactionDTO,
	IndexTransactionDTO,
} from "../dtos/transactions.dto";
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

	index = async (
		req: Request<unknown, unknown, unknown, IndexTransactionDTO>,
		res: Response,
		next: NextFunction,
	) => {
		try {
			const { title, categoryId, beginDate, endDate } = req.query;
			const result = await this.transactionService.index({
				title,
				categoryId,
				beginDate,
				endDate,
			});

			return res.status(StatusCodes.OK).json(result);
		} catch (err) {
			next(err);
		}
	};
}
