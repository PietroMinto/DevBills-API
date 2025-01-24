"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categories_controller_1 = require("../controllers/categories.controller");
exports.categoriesRoutes = (0, express_1.Router)();
const controller = new categories_controller_1.CategoriesController();
exports.categoriesRoutes.post("/", controller.create);
