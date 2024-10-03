import React, { useState } from 'react';
import axios from 'axios';
import './AddBankAccount.css'; // Asegúrate de importar el CSS

function AddBankAccount() {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bank-accounts', {
        accountName,
        accountNumber,
        bankName,
      });
      setMessage('Cuenta bancaria añadida exitosamente.');
      setAccountName('');
      setAccountNumber('');
      setBankName('');
    } catch (error) {
      setMessage('Error al agregar la cuenta bancaria. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="add-bank-account">
      <h2>Agregar Cuenta Bancaria</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountName">Nombre de la Cuenta:</label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="accountNumber">Número de Cuenta:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bankName">Nombre del Banco:</label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Cuenta</button>
      </form>
    </div>
  );
}

export default AddBankAccount;
