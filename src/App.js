import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import './App.css';
import Feedback from './components/Feedback';
import AddBankAccount from './components/AddBankAccount';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/register">Registro</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/admin">Administración</Link>
        <Link to="/feedback">Retroalimentación</Link>
        <Link to="/add-bank-account">Agregar Cuenta Bancaria</Link>
        <Link to="/expense-summary">Resumen de Gastos</Link>
        <div className="dropdown">
          <button className="dropbtn">Información</button>
          <div className="dropdown-content">
            <Link to="#">Sobre Amex</Link>
            <Link to="#">Servicios</Link>
            <Link to="#">Soporte</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>Bienvenido a Amex</h1>
        <div className="about-container">
          <h2>Acerca de Nuestra Empresa</h2>
          <p>
            En Amex, nos dedicamos a ofrecer la mejor experiencia en gestión financiera. Nuestra aplicación permite a los usuarios gestionar sus gastos, cuentas bancarias y mucho más de manera eficiente.
          </p>
          <p>
            Nuestra misión es simplificar las finanzas personales mediante herramientas intuitivas y seguras que ayudan a los usuarios a tomar decisiones informadas.
          </p>
          <h3 className="centered-title">¿Qué Ofrecemos?</h3>
          <ul>
            <li>Gestión de gastos y presupuestos</li>
            <li>Alertas de gasto</li>
            <li>Soporte al cliente 24/7</li>
            <li>Acceso a asesoramiento financiero</li>
          </ul>
        </div>
        <div className="ceo-container">
          <h3>Nuestros CEO</h3>
          <div className="ceo-row">
            <div className="ceo">
              <img src="https://www.steverrobbins.com/wp-content/uploads/ceo-midjourney-office-980x653.jpg" alt="CEO 1" className="ceo-image" />
              <p className="ceo-name">Nombre del CEO 1</p>
              <p className="ceo-legend">CEO desde 2020. Con una vasta experiencia en el sector, ha guiado a la compañía hacia el crecimiento y la innovación.</p>
            </div>
            <div className="ceo">
              <img src="https://mexico.unir.net/wp-content/uploads/sites/6/2021/02/ceo-director-ejecutivo.jpg" alt="CEO 2" className="ceo-image" />
              <p className="ceo-name">Nombre del CEO 2</p>
              <p className="ceo-legend">CEO desde 2022. Con un enfoque en la sostenibilidad y la responsabilidad social, trabaja para que nuestra compañía sea un ejemplo en la industria.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <img src="https://via.placeholder.com/50" alt="Logo de AMEX" className="footer-logo" />
        <p>AMEX 2024 Copyright</p>
      </footer>
    </Router>
  );
}

export default App;
