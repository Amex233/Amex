import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // datos al backend
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="register-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Número de Teléfono</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Calle</label>
          <input type="text" name="street" value={formData.street} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Ciudad</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Estado</label>
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Código Postal</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
