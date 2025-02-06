"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const http_status_codes_1 = require("http-status-codes");
class TransactionsController {
    constructor(transactionService) {
        this.transactionService = transactionService;
        this.create = async (req, res, next) => {
            try {
                const { title, amount, date, type, categoryId } = req.body;
                const result = await this.transactionService.create({
                    title,
                    amount,
                    date,
                    type,
                    categoryId,
                });
                return res.status(http_status_codes_1.StatusCodes.CREATED).json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.index = async (req, res, next) => {
            try {
                const { title, categoryId, beginDate, endDate } = req.query;
                const result = await this.transactionService.index({
                    title,
                    categoryId,
                    beginDate,
                    endDate,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.getDashboard = async (req, res, next) => {
            try {
                const { beginDate, endDate } = req.query;
                const result = await this.transactionService.getDashboard({
                    beginDate,
                    endDate,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.getFinancialEvolution = async (req, res, next) => {
            try {
                const { year } = req.query;
                const result = await this.transactionService.getFinancialEvolution({
                    year,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json(result);
            }
            catch (err) {
                next(err);
            }
        };
    }
}
exports.TransactionsController = TransactionsController;
