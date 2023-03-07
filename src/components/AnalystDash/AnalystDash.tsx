import HealthStatus from '../AdminDash/HealthStatus/HealthStatus';
import GridPageLayout from '../global/GridLayout/GridPageLayout';
import Table from '../global/table/Table';
import Grid from '../layout/Grid/Grid';
import GridItem from '../layout/GridItem/GridItem';
import AlertsAndReports from './AlertsAndReports/AlertsAndReports';
import IncidentTrends from './IncidentTrends/IncidentTrends';
import ServiceActivity from './ServiceActivity/ServiceActivity';
import ServiceSummary from './ServiceSummary/ServiceSummary'

const gridBoxData = [
  { num: 12, type: "Assigned to Me", isSelected: true },
  { num: 165, type: "Assigned to Org", isSelected: false },
  { num: 22, type: "Asset Alarms", isSelected: false },
  { num: 7, type: "Critical Alarms Today", isSelected: false },
  { num: 29, type: "Critical Incidents Today", isSelected: false },
];

const AnalystDash = () => (
  <section>
    <GridPageLayout {...gridBoxData} />
    <Grid>
      <GridItem title="Assigned To Me">
        <Table />
      </GridItem>
      <HealthStatus />
      <GridItem title='Incident Trends (last 7 days)'>
        <IncidentTrends />
      </GridItem>
      <GridItem title='New alerts and reports'>
        <AlertsAndReports />
      </GridItem>
      <GridItem title='Service Summary (Last 7 days) '>
        <ServiceSummary />
      </GridItem>
      <ServiceActivity />
    </Grid>
  </section>
);

export default AnalystDash;
