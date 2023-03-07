import react, { FC } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import UsersAssignedTable from '../../global/table/Tables/UsersAssignedTable';


const styles = {
    tableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
}

interface UsersAssignedProps {}

const UsersAssigned: FC<UsersAssignedProps> = () => (
    <GridItem title="Users Assigned To Organization">
        <div style={styles.tableHeader}>
        </div>
        <UsersAssignedTable />
      </GridItem>
);

export default UsersAssigned;