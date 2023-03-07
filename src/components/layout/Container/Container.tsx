import { FC } from 'react';
import Header from '../../global/Header/Header';
import Sidebar from '../../global/Sidebar/Sidebar';
import './Container.css'
import Dashboard from '../Dashboard/Dashboard';

interface ContainerProps {
  children: any
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className='app'>
    <Header />
    <main className="main">
      <Dashboard name='Tom'>
        {children}
      </Dashboard>
    </main>
    <nav className="nav">
      <Sidebar />
    </nav>

  </div>
);

export default Container;
