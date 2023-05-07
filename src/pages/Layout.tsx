import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Player } from '../components/Player/Player';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className='layout bg-neutral-900 h-screen'>
      <Header></Header>
      {children}
    </div>
  )
};

export default Layout;