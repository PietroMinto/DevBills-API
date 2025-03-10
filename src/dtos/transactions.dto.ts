import { z } from "zod";
import { transactionType } from "../entities/transactions.entity";

export const createTransactionSchema = {
	title: z.string(),
	amount: z.number().int().positive(),
	type: z.nativeEnum(transactionType),
	date: z.coerce.date(),
	categoryId: z.string().length(24),
};

const createTransactionObject = z.object(createTransactionSchema);
export type CreateTransactionDTO = z.infer<typeof createTransactionObject>;

export const indexTransactionSchema = {
	title: z.string().optional(),
	categoryId: z.string().length(24).optional(),
	beginDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionSchema);
export type IndexTransactionDTO = z.infer<typeof indexTransactionsObject>;

export const getDahBoardSchema = {
	beginDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
};

const getDashboardObject = z.object(getDahBoardSchema);
export type GetDashboardDTO = z.infer<typeof getDashboardObject>;

export const getFinancialEvolutionSchema = {
	year: z.string(),
};

const getFinancialEvolutionObject = z.object(getFinancialEvolutionSchema);
export type GetFinancialEvolutionDTO = z.infer<
	typeof getFinancialEvolutionObject
>;
