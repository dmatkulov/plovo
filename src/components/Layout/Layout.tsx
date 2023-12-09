import React, {PropsWithChildren} from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        {children}
      </main>
    </>
  );
};

export default Layout;