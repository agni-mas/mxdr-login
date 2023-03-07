import React, { FC } from 'react';
import './Grid.css';

interface GridProps {
  children: any
}

const Grid: FC<GridProps> = ({ children }) => (
  <div className='grid'>
    {children}
  </div>
);

export default Grid;
