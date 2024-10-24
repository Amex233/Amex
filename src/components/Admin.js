import React from 'react';
import './Admin.css'; // CSS ADMIN

function Admin() {
  return (
    <div className="admin-container">
      <h1>Panel de Administración - Sprint y Backlog</h1>
      <h2>Revisión del Sprint</h2>
      <table className="sprint-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Elemento de Trabajo</th>
            <th>Puntos de Historia</th>
            <th>Responsable</th>
            <th>Estado</th>
            <th>Estimado Original</th>
            <th>Día 1</th>
            <th>Día 2</th>
            <th>Día 3</th>
            <th>Día 4</th>
            <th>Día 5</th>
            <th>Revisión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID 1</td>
            <td>Registro de Usuario</td>
            <td>8</td>
            <td>Ana</td>
            <td>En Progreso</td>
            <td>8</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>-</td>
            <td>Completo</td>
          </tr>
          {/* Añadir más filas si se requiere*/}
        </tbody>
      </table>

      <h2>Backlog del Proyecto</h2>
      <table className="backlog-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Historia</th>
            <th>Prioridad</th>
            <th>Estado</th>
            <th>Esfuerzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Como usuario, quiero registrarme en la aplicación para tener una cuenta.</td>
            <td>Alta</td>
            <td>Por hacer</td>
            <td>Medio</td>
          </tr>
          {/* Añadir más filas según el backlog */}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
