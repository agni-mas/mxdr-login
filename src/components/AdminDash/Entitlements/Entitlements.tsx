import react, { FC } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '../../global/table/Table';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import EntitlementsTable from '../../global/table/Tables/EntitlementsTable';


const styles = {
   
}

interface EntitlementsProps {}

const Entitlements: FC<EntitlementsProps> = () => (
    <GridItem title="Entitlements (last 7 days)">
        <EntitlementsTable />
    </GridItem>
);

export default Entitlements;