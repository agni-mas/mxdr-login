import React, { FC } from 'react';
import GridPageLayout from '../global/GridLayout/GridPageLayout';
import Grid from '../layout/Grid/Grid';
import UsersAssigned from './UsersAssigned/UsersAssigned';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthStatus from './HealthStatus/HealthStatus';
import OnboardingStatus from './OnboardingStatus/OnboardingStatus';
import EscalationContacts from './EscalationContacts/EscalationContacts';
import NewAlertsAndReports from './NewAlertsAndReports/NewAlertsAndReports';
import ServiceSummary from '../AnalystDash/ServiceSummary/ServiceSummary';
import Entitlements from './Entitlements/Entitlements';
import GridItem from '../layout/GridItem/GridItem';

interface userData {
  firstName: string
  lastName: string
  email: string
  role: string
  organization: string
  lastLogin: string
}

interface AdminDashProps {}

const styles = {
  topButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 35,
  },
  header: {
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 22,
    color: 'white',
  },
  button: {
    backgroundColor:'#7500C0',
    border: 'none',
    marginRight: 10,
  },
  icon: {
    paddingLeft: 5,
  },

}

const gridBoxData = [
  { num: 27, type: "Assigned to Me", isSelected: false },
  { num: 58, type: "Assigned to Org", isSelected: true },
  { num: 6, type: "Asset Alarms", isSelected: false },
  { num: 3, type: "Critical Alerts Today", isSelected: false },
  { num: 11, type: "Critical Incidents Today", isSelected: false },
];

const AdminDash: FC<AdminDashProps> = () => {
  return (
    <section>
      <GridPageLayout {...gridBoxData} />
      <div style={styles.topButtons}>
      <Button color='secondary' variant="outlined" style={styles.button}>New Role<AddIcon style={styles.icon} /></Button>
      <Button color='secondary' variant="outlined">Customize<SettingsIcon style={styles.icon} /></Button>
      </div>
    <Grid>
      <UsersAssigned />
      <HealthStatus />
      <Entitlements />
      <OnboardingStatus />
      <EscalationContacts />
      <NewAlertsAndReports />
      <GridItem title='Service Summary (Last 7 days) '>
        <ServiceSummary/>
      </GridItem>
      {/* <AlertDetectionAndResponse /> */}
      {/* {children} */}
    </Grid>
    </section>
  )
};


export default AdminDash;
