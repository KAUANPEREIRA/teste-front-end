import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header';
import Banner from './componentes/Banner';

import menuData from './utils/menuData.json'
import { CategoriesList } from './componentes/CategoriesList';
import { Providers } from './utils/provider';

function App() {
  return (
   

    </Providers>
    <div className="App">
       <Providers>

      
    <Header/>
    <Banner/>
    <CategoriesList/>
     </Providers>
    </div>
  );
}

export default App;
