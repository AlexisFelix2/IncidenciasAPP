import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegistroIncidenciaPage from './pages/RegistroIncidenciaPage';
import PanelTecnicoPage from './pages/PanelTecnicoPage';
import ReportesPage from './pages/ReportesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroIncidenciaPage />} />
        <Route path="/tecnico" element={<PanelTecnicoPage />} />
        <Route path="/reportes" element={<ReportesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
