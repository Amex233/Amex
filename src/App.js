import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import './App.css'; // Importa los estilos generales
import Feedback from './components/Feedback';
import AddBankAccount from './components/AddBankAccount'; // Importar el nuevo componente
import ExpenseSummary from './components/ExpenseSummary'; // Importa el nuevo componente
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/register">Registro</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/admin">Administración</Link> {/* Añadir enlace al panel de admin */}
        <Link to="/feedback">Retroalimentación</Link> {/* Nueva ruta */}
        <Link to="/add-bank-account">Agregar Cuenta Bancaria</Link> {/* Enlace a la nueva página */}
        <Link to="/expense-summary">Resumen de Gastos</Link> {/* Añade este enlace */}
      </nav>
      <div className="container">
        <h1>Amex</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} /> {/* Ruta para la página de admin */}
          <Route path="/feedback" element={<Feedback />} /> {/* Página de feedback */}
          <Route path="/add-bank-account" element={<AddBankAccount />} /> {/* Ruta para la nueva página */}
          <Route path="/expense-summary" element={<ExpenseSummary />} /> {/* Ruta para el resumen de gastos */}
        </Routes>
      </div>
    </Router>
  );
}

// Componente para la página de inicio
function Home() {
  return (
    <div>
      <h2>Acerca de Nuestra Empresa</h2>
      <p>
        En nuestra compañía, nos dedicamos a ofrecer la mejor experiencia de compra en línea. 
        Nuestra plataforma permite a los usuarios registrarse, iniciar sesión, navegar por categorías de productos y realizar compras de manera segura y eficiente.
      </p>
      <p>
        Con un equipo comprometido y una visión clara, hemos diseñado un sistema intuitivo que mejora la experiencia del usuario y asegura transacciones seguras.
      </p>
      <p>
        Nuestro objetivo es ser líderes en el mercado, ofreciendo productos de calidad y un servicio al cliente excepcional.
      </p>

      <div className="ceo-container">
        <h3>Nuestros CEO</h3>
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
  );
}

export default App;

