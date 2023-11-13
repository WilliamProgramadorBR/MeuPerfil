import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Telas/Home'; // Verifique o caminho correto para o componente Home
import ListaCompra from '../Telas/ListaCompras'; 
import Header from '../Componentes/topo/Headers';// Verifique o caminho correto para o componente ListaCompra
import Footer from '../Componentes/rodape/foooter';

const AppRoutes = () => {
  return (
    <div>
      <Header/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/lista-compra" element={<ListaCompra />} />
      <Route path='/Headers'element={<Header/>}></Route>
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
