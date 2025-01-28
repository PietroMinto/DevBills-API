import { Category } from "./category.entity";

export enum transactionType {
	INCOME = "income",
	EXPENSE = "expense",
}

type TransactionProps = {
	_id?: string;
	title: string;
	amount: number;
	date: Date;
	category: Category;
	type: transactionType;
};

export class Transaction {
	public _id?: string;
	public title: string;
	public amount: number;
	public date: Date;
	public category: Category;
	public type: transactionType;

	constructor({ _id, type, date, amount, category, title }: TransactionProps) {
		this._id = _id;
		this.title = title;
		this.type = type;
		this.date = new Date(date);
		this.amount = amount;
		this.category = new Category(category);
	}
}
