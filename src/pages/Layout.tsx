import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className='layout bg-neutral-900 h-screen'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
};

export default Layout;