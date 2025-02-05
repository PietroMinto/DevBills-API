type ExpenseProps = {
	id: string;
	title: string;
	color: string;
	amount: number;
};

export class Expense {
	public id: string;
	public title: string;
	public color: string;
	public amount: number;

	constructor({ id, title, amount, color }: ExpenseProps) {
		this.id = id;
		this.title = title;
		this.color = color;
		this.amount = amount;
	}
}
