"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const categories_service_1 = require("../services/categories-service");
class CategoriesController {
    async create(_, res) {
        const service = new categories_service_1.CategoriesService();
        const result = await service.create();
        return res.status(201).json(result);
    }
}
exports.CategoriesController = CategoriesController;
