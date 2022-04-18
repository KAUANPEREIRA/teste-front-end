
import React from "react";
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav"
import Categorias from "./componentes/categorias/Categorias";
import MeusCaes from "./componentes/meusCaes/MeusCaes";
import MeusProdutos from "./componentes/meusProdutos/MeusProdutos";
import HeaderMarcas from "./componentes/headerMarcas/HeaderMarcas";
import PrincipaisMarcas from "./componentes/principaisMarcas/PrincipaisMarcas";
import Parceiros from "./componentes/parceiros/Parceiros";
import NossoBlog from "./componentes/nossoBlog/NossoBlog"
import Sociais from "./componentes/socias/Sociais";
import  EntreEmContato  from "./componentes/entreEmContato/EntreEmContato";
import Footer from "./componentes/footer/Footer";
function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Categorias/>
      <MeusCaes/>
      <MeusProdutos/>
      <HeaderMarcas/>
      <PrincipaisMarcas/>
      <Parceiros/>
      <NossoBlog/>
      <Sociais/>
      <EntreEmContato/>
      <Footer/>
      



      
    </div>
  
  )
}

export default App;
