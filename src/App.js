import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Patients from './components/Patients/Patients';
import Appointments from './components/Appointments/Appointments';
import Telemedicine from './components/Telemedicine/Telemedicine';
import Prescriptions from './components/Prescriptions/Prescriptions';
import ClinicalData from './components/ClinicalData/ClinicalData';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="Main-content">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/clinical-data" element={<ClinicalData />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
