import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExpenseSummary.css'; 

const ExpenseSummary = () => {
  const [expenses, setExpenses] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [creditHistory, setCreditHistory] = useState([]);

  // Función para obtener los gastos del usuario
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/expenses'); 
      setExpenses(response.data);
    } catch (error) {
      console.error('Error al obtener los gastos', error);
    }
  };

  // Función para obtener los pagos pendientes del usuario
  const fetchPendingPayments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pending-payments'); 
      setPendingPayments(response.data);
    } catch (error) {
      console.error('Error al obtener los pagos pendientes', error);
    }
  };

  // Función para obtener el historial crediticio del usuario
  const fetchCreditHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/credit-history'); 
      setCreditHistory(response.data);
    } catch (error) {
      console.error('Error al obtener el historial crediticio', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
    fetchPendingPayments();
    fetchCreditHistory();
  }, []);

  // Calcula el total de gastos
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-summary-container">
      <h2>Resumen de Gastos</h2>

      <div className="main-content">
        <div className="left-section">
          <h3>Total Gastos: ${totalExpenses.toFixed(2)}</h3>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Monto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.category}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>{expense.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="right-section">
          <h3>Pagos Pendientes</h3>
          <ul className="pending-payments-list">
            {pendingPayments.map((payment) => (
              <li key={payment.id}>
                {payment.description} - ${payment.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="credit-history">
        <h3>Historial Crediticio</h3>
        <table className="credit-history-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {creditHistory.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>${entry.amount.toFixed(2)}</td>
                <td>{entry.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-account">
        <h3>Total en la Cuenta: ${totalExpenses.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ExpenseSummary;
