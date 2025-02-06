"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.transactionType = void 0;
const category_entity_1 = require("./category.entity");
var transactionType;
(function (transactionType) {
    transactionType["INCOME"] = "income";
    transactionType["EXPENSE"] = "expense";
})(transactionType || (exports.transactionType = transactionType = {}));
class Transaction {
    constructor({ _id, type, date, amount, category, title }) {
        this._id = _id;
        this.title = title;
        this.type = type;
        this.date = new Date(date);
        this.amount = amount;
        this.category = new category_entity_1.Category(category);
    }
}
exports.Transaction = Transaction;
