import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Dados estáticos para simulação
  const data = {
    totalPatients: 100,
    upcomingAppointments: 5,
    recentActivity: 'Atualizado há 1 hora'
  };

  return (
    <div className="Dashboard">
      <h2>Painel</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total de Pacientes</h3>
          <p>{data.totalPatients}</p>
        </div>
        <div className="card">
          <h3>Próximas Consultas</h3>
          <p>{data.upcomingAppointments}</p>
        </div>
        <div className="card">
          <h3>Atividades Recentes</h3>
          <p>{data.recentActivity}</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <h3>Estatísticas dos Pacientes</h3>
          {/* Adicione o gráfico aqui */}
        </div>
        <div className="chart">
          <h3>Tendências de Consultas</h3>
          {/* Adicione o gráfico aqui */}
        </div>
      </div>
      <div className="notifications">
        <h3>Notificações Importantes</h3>
        <p>Sem novas notificações.</p>
      </div>
    </div>
  );
}

export default Dashboard;
