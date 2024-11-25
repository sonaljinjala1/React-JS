import React, { useState, useEffect } from "react";
import "./style.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

function App() {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    return savedBudget ? JSON.parse(savedBudget) : 0;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);
  const balance = budget - totalExpenses;

  
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [budget, expenses]);

  const handleSetBudget = () => {
    if (!budget || budget <= 0) {
      alert("Please enter a valid budget!");
      return;
    }
    alert("Budget set successfully!");
  };

  const handleAddExpense = () => {
    if (!expenseTitle || !expenseAmount || expenseAmount <= 0) {
      alert("Please enter valid expense details!");
      return;
    }

    if (isEditing) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = { title: expenseTitle, amount: Number(expenseAmount) };
      setExpenses(updatedExpenses);
      setIsEditing(false);
      setEditIndex(null);
      alert("Expense updated successfully!");
    } else {
      const newExpense = { title: expenseTitle, amount: Number(expenseAmount) };
      setExpenses([...expenses, newExpense]);
      alert("Expense added successfully!");
    }

    setExpenseTitle("");
    setExpenseAmount("");
  };

  const handleEditExpense = (index) => {
    const expenseToEdit = expenses[index];
    setExpenseTitle(expenseToEdit.title);
    setExpenseAmount(expenseToEdit.amount);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div >
      <h1 style={{marginBottom:"30px !important " , marginTop:"30px !important" , textAlign:"center"}}>Expense Tracker</h1>
    <div className="app-container">
      <div className="top-section">
        <div className="budget-box">
          <h3>Budget</h3>
          <input
            type="number"
            placeholder="Enter Total Amount"
            value={budget || ""}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <button onClick={handleSetBudget}>Set Budget</button>
        </div>
        <div className="expense-box">
          <h3>Expenses</h3>
          <input
            type="text"
            placeholder="Expense Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button onClick={handleAddExpense}>
            {isEditing ? "Update Expense" : "Add Expense"}
          </button>
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-item">
          <h4>Total Budget</h4>
          <p>{budget}</p>
        </div>
        <div className="summary-item">
          <h4>Expenses</h4>
          <p>{totalExpenses}</p>
        </div>
        <div className="summary-item">
          <h4>Balance</h4>
          <p>{balance}</p>
        </div>
      </div>

      <div className="expense-list-section ">
        <h4>Expense List</h4>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div className="expense-details  align-items-center">
                <span>{expense.title}</span>
                <span className="expense-amount">{expense.amount}</span>
              </div>
              <div>
                <button
                  className="edit-btn"
                  onClick={() => handleEditExpense(index)}
                >
                  <FaEdit   style={{ fontSize: "25px" , color: "#007bff"}}/>

                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteExpense(index)}
                >
                  <RiDeleteBinFill  style={{ fontSize: "29px" , color: "#007bff"}} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
