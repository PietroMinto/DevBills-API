import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type {
	CreateTransactionDTO,
	GetDashboardDTO,
	GetFinancialEvolutionDTO,
	IndexTransactionDTO,
} from "../dtos/transactions.dto";
import type { TransactionsService } from "../services/transactions-service";
import { BodyRequest, QueryRequest } from "./types";

export class TransactionsController {
	constructor(private transactionService: TransactionsService) {}

	create = async (
		req: BodyRequest<CreateTransactionDTO>,
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
		req: QueryRequest<IndexTransactionDTO>,
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

	getDashboard = async (
		req: QueryRequest<GetDashboardDTO>,
		res: Response,
		next: NextFunction,
	) => {
		try {
			const { beginDate, endDate } = req.query;
			const result = await this.transactionService.getDashboard({
				beginDate,
				endDate,
			});

			return res.status(StatusCodes.OK).json(result);
		} catch (err) {
			next(err);
		}
	};

	getFinancialEvolution = async (
		req: QueryRequest<GetFinancialEvolutionDTO>,
		res: Response,
		next: NextFunction,
	) => {
		try {
			const { year } = req.query;
			const result = await this.transactionService.getFinancialEvolution({
				year,
			});

			return res.status(StatusCodes.OK).json(result);
		} catch (err) {
			next(err);
		}
	};
}
