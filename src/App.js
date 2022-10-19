import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

import IndexUser from './User/IndexUser'
import Managers from './Admin/controllers/Managers'
import IndexAdmin from './Admin/IndexAdmin'
import Login from './Login/Login'

import './styleSheet/CSS/Header.css'
import './styleSheet/CSS/detailProduct.css'
import './styleSheet/CSS/contact.css'
import './styleSheet/CSS/admin1.css'
function App() {
  return (
    <div className="App">
      <Routes>
      {/*client*/}
        <Route path="/" element={<IndexUser.HomePage />} />
        <Route path="/product" element={<IndexUser.ProductPage />} />
        <Route path="/contact" element={<IndexUser.ContactPage />} />
        <Route path="/cart" element={<IndexUser.CartPage />} />
        <Route path="/product/detail" element={<IndexUser.DetailProduct />} />

        <Route path='/login' element={<Login />} />
      {/*admin*/}
      <Route path='/admin' element={<IndexAdmin  />} >
          <Route index element={<Managers.DashboardPage />} />
          <Route path='product' element={<Managers.ProductPageAdmin />} />
          <Route path='product/createProduct' element={<Managers.CreateProduct  />} />
      </Route>
        {/*<Route path='/admin' element={<IndexAdmin.DashboardPage />} />
        <Route path='/admin/product' element={<IndexAdmin.ProductPageAdmin />} />
        <Route path='/admin/product/createProduct' element={<IndexAdmin.CreateProduct />} />*/}
      </Routes>
    </div>
  )

}



export default App;
