// src/components/ExpenseSummary.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExpenseSummary.css'; // Importa el archivo CSS

const ExpenseSummary = () => {
  const [expenses, setExpenses] = useState([]);

  // Función para obtener los gastos del usuario
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/expenses'); // Asegúrate de que esta ruta sea correcta
      setExpenses(response.data);
    } catch (error) {
      console.error('Error al obtener los gastos', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Calcula el total de gastos
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-summary-container">
      <h2>Resumen de Gastos</h2>
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
  );
};

export default ExpenseSummary;
