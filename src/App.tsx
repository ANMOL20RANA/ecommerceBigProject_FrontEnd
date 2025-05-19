import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button ,ThemeProvider} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/navbar';
import customeTheme from './theme/customeTheme';
import Home from './customer/pages/home/Home';
import Product from './customer/pages/product/Product';
function App() {
  return (
   

      <ThemeProvider theme={customeTheme}>
        <div>
            <Navbar/>
            {/* <Home/> */}
            <Product/>
        </div>
         
      </ThemeProvider>
      
  );
}

export default App;
