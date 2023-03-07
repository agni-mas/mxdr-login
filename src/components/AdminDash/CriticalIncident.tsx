import react, { FC } from 'react';
import GridItem from '../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '../global/table/Table';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CriticalIncidentTable from '../global/table/Tables/CriticalIncidentTable';


const styles = {
   
}

interface IncidentDetectionProps {}

const IncidentDetection: FC<IncidentDetectionProps> = () => (
    <GridItem title="Critical Incident Trends (last 7 days)">
        <CriticalIncidentTable />
    </GridItem>
);

export default IncidentDetection;