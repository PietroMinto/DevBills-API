"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const category_entity_1 = require("../entities/category.entity");
class CategoriesService {
    async create() {
        const category = new category_entity_1.Category({
            title: "Example Category",
            color: "#ff4",
        });
        return category;
    }
}
exports.CategoriesService = CategoriesService;
