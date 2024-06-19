import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="Sidebar">
      <ul>
        <li><a href="/dashboard">Painel</a></li>
        <li><a href="/patients">Pacientes</a></li>
        <li><a href="/appointments">Consultas</a></li>
        <li><a href="/telemedicine">Telemedicina</a></li>
        <li><a href="/prescriptions">Prescrições</a></li>
        <li><a href="/clinical-data">Dados Clínicos</a></li>
        <li><a href="/settings">Configurações</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
