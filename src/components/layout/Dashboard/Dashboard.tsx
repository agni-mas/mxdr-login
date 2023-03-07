import { withEmotionCache } from '@emotion/react';
import { whitelabel_configuration } from '@looker/sdk';
import React, { FC, useEffect, useState } from 'react';
import './Dashboard.css';

interface DashboardProps {
  children: any,
  name: string
}

const styles = {
  greeting: {
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 26,
    paddingBottom: 19,
    color: 'white',
  }
}

const Dashboard: FC<DashboardProps> = ({ children, name = 'Alex' }) => {

  return (
    <section className='dashboard'>
      <div style={styles.greeting}>Good day, {name}</div>
      {children}
    </section>
  );
};

export default Dashboard