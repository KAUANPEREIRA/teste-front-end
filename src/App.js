
import React from "react";
import Header from "./componentes/header/Header";
import Nav from "./componentes/nav/Nav"
import Categorias from "./componentes/categorias/Categorias";
import MeusCaes from "./componentes/meusCaes/MeusCaes";
import MeusProdutos from "./componentes/meusProdutos/MeusProdutos";
import HeaderMarcas from "./componentes/headerMarcas/HeaderMarcas";
import PrincipaisMarcas from "./componentes/principaisMarcas/PrincipaisMarcas";
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
      



      
    </div>
  
  )
}

export default App;
