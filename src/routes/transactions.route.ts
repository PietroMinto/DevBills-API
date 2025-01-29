import { Router } from "express";

import { TransactionsController } from "../controllers/transactions.controller";
import { createTransactionSchema } from "../dtos/transactions.dto";
import { TransactionFactory } from "../factories/transactions.factory";
import { ParamsType, validator } from "../middleware/validator.middlewares";

export const transactionsRoutes = Router();

const controller = new TransactionsController(
	TransactionFactory.getServiceInstance(),
);

transactionsRoutes.post(
	"/",
	validator({
		schema: createTransactionSchema,
		type: ParamsType.BODY,
	}),
	controller.create,
);

transactionsRoutes.get("/", controller.index);
