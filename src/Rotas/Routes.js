import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Telas/Home/index';
import ProjectDetails from '../Telas/Projetos/index';
import Certificados from '../Telas/Certificados/certificados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
