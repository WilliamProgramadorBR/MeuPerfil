import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Telas/Home'; // Verifique o caminho correto para o componente Home
import Projetos from '../Telas/Projetos'; 
import Header from '../Componentes/topo/Headers';// Verifique o caminho correto para o componente Projetos
import Footer from '../Componentes/rodape/foooter';
import Certificados from '../Telas/Certificados/certificados';
import Tecnologia from '../Telas/Tecnologias/Tecnologia';
import NotFound from '../Telas/Notfound/NotFound';




const AppRoutes = () => {
  return (
    <div>
      <Header/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path='/Tecnologias'element={<Tecnologia/>}></Route>
      <Route path='/Headers'element={<Header/>}></Route>
      <Route path="/certificados" element={<Certificados/>} />
      <Route path="/*" element={<NotFound/>} />

    </Routes>

    <Footer />
    
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    
  );
};

export default App;
