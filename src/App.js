import './App.css';
import React  from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Wrapper from './components/HOC/Wrapper';

import ProductsProvider from './components/Providers/ProductsProviders';
import FilterProducts from './components/Filter/FilterProducts';
import SearchBar from './common/Search/Search';

const App= () => {
    return (
      <>
        <ProductsProvider>
          <NavBar />
          <FilterProducts />
          <ProductList/>
        </ProductsProvider>
      </>
    );  
}
 

export default Wrapper(App, "App")
