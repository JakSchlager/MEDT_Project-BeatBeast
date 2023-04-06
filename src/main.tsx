import App from './pages/App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from 'react'
import Layout from './pages/Layout';
import Error404 from './pages/Error404';
import Account from './pages/Account';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)