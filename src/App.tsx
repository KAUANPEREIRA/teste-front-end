import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header';
import Banner from './componentes/Banner';

import menuData from './utils/menuData.json';
import { CategoriesList } from './componentes/CategoriesList';
import { Providers } from './utils/provider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductsList } from './componentes/ProductsList';

function App() {
   

  return (
    <Providers>
      <div className="App">
        <Header />
        <Banner />
        <CategoriesList />
        <ProductsList/>
       
      </div>
    </Providers>
  );
}

export default App;
