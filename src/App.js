import './App.css';
import React  from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Wrapper from './components/HOC/Wrapper';

import ProductsProvider from './components/Providers/ProductsProviders';

const App= () => {
    return (
      <>
        <ProductsProvider>
          <NavBar />
          <ProductList/>
        </ProductsProvider>
      </>
    );  
}
 

export default Wrapper(App, "App")
