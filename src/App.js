import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/budget";
import Remaining from "./components/remaining";
import ExpenseTotal from "./components/spentTotal";
import ExpenseList from "./components/expenses";
import AddExpenseForm from "./components/addExpense";
import { AppProvider } from "./context/appContext";
import BudgetEdit from "./components/budgetEdit"

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm-12">
            <Budget />
          </div>
          <div className="col-sm-12">
            <Remaining />
          </div>
          <div className="col-sm-12">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3 row">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <div className="mt-3 row">
          <div className="col-sm">
            <BudgetEdit />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
