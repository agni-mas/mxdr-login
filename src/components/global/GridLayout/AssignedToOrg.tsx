import React, { FC } from 'react';

interface AssignedToOrgProps {}

const styles = {
    main: {
        padding: 30
    },
    header: {
        fontFamily: 'Graphik',
        fontStyle: 'normal',
        fontSize: 32, 
        fontWeight: 400,
    },
}

const AssignedToOrg: FC<AssignedToOrgProps> = () => (
  <div style={styles.main}>
    <div style={styles.header}>
    Assigned to Org
    </div>
  </div>
);

export default AssignedToOrg;