import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from 'react'
import Register from './pages/Register';
import App from './pages/App';
import Layout from './pages/Layout';
import Error404 from './pages/Error404';
import Account from './pages/Account';
import Login from './pages/Login';
import Bibliothek from './pages/Bibliothek';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/home" element={<App/>} />
          <Route path='/bibliothek' element={<Bibliothek/>}/>
          <Route path="/account" element={<Account/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)