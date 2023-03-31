import React from 'react';
import Header from '../components/Header';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className='layout h-screen bg-neutral-900'>
        <Header></Header>
        {children}
    </div>
  )
};

export default Layout;