import { Component, OnInit } from '@angular/core';

interface Expense {
  name: string;
  value: number;
}
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css'],
})
export class FinancialComponent implements OnInit {
  expenses: Expense[] = [];
  expenseName: string = '';
  expenseValue: number | null = null;
  totalExpenses: number = 0;

  ngOnInit() {
    this.calculateTotal();
  }
  addExpense() {
    if (this.expenseName && this.expenseValue !== null) {
      this.expenses.push({ name: this.expenseName, value: this.expenseValue });
      this.expenseName = '';
      this.expenseValue = null;
      this.calculateTotal();
    }
  }
  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalExpenses = this.expenses.reduce(
      (sum, expense) => sum + expense.value,
      0
    );
  }
}
