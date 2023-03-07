import React, { FC } from 'react';
import TableComponent from '../table/Table';

interface AssetCriticalityProps {}

const styles = {
    main: {
        padding: 30,
    },
    header: {
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 22,
    },
}

const AssetCriticality: FC<AssetCriticalityProps> = () => (
  <div style={styles.main}>
    <div style={styles.header}>
    Asset Criticality (7 days)
    <TableComponent/>
    </div>
  </div>
);

export default AssetCriticality;