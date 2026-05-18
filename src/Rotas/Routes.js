import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certificados from '../Telas/Certificados/certificados';
import Home from '../Telas/Home';
import NotFound from '../Telas/Notfound/NotFound';
import ProjectDetails from '../Telas/Projetos';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
