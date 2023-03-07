import React, { FC } from 'react';
import './GridItem.css'

interface DashboardProps {
  children: any,
  title: string,
}

const Dashboard: FC<DashboardProps> = ({ children, title }) => (
  <section className='item'>
    <h2 className='grid-item-title'>{title}</h2>
    {children}
  </section>
);

export default Dashboard;
