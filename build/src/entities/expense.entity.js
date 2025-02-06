"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
class Expense {
    constructor({ id, title, amount, color }) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.amount = amount;
    }
}
exports.Expense = Expense;
