import react, { FC } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '../../global/table/Table';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AlertsAndReports from '../../AnalystDash/AlertsAndReports/AlertsAndReports';


const styles = {
}

interface NewAlertsAndReportsProps {}

const NewAlertsAndReports: FC<NewAlertsAndReportsProps> = () => (
    <GridItem title="New Alerts and Reports">
        <AlertsAndReports />
    </GridItem>
);

export default NewAlertsAndReports;