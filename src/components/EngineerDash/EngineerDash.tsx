import React, { FC } from 'react';
import GridPageLayout from '../global/GridLayout/GridPageLayout';
import PieChart from '../global/PieChart/PieChart';
import Table from '../global/table/Table';
import Grid from '../layout/Grid/Grid';
import GridItem from '../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import AssetTrends from './AssetTrends/AssetTrends';
import HealthStatus from '../AdminDash/HealthStatus/HealthStatus';
import ServiceSummary from '../AnalystDash/ServiceSummary/ServiceSummary';

interface EngineerDashProps { }

const gridBoxData = [
  { num: 7, type: "Assigned to Me", isSelected: true },
  { num: 260, type: "Assigned to Org", isSelected: false },
  { num: 21, type: "Total Unconfigured Sources", isSelected: false },
  { num: 5, type: "Critical Alarms Today", isSelected: false },
  { num: 2, type: "LCP Alerts Today", isSelected: false },
];

const EngineerDash: FC<EngineerDashProps> = () => (
  <div>
    <section>
      <GridPageLayout {...gridBoxData} />
      <Grid>
        <GridItem title="Alarms Assigned to Me">
          <Table />
        </GridItem>
        <HealthStatus />
        <GridItem title='Service Summary (Last 7 days) '>
          <ServiceSummary />
        </GridItem>
        {/* {children} */}
      </Grid>
    </section>
  </div>
);

export default EngineerDash;
