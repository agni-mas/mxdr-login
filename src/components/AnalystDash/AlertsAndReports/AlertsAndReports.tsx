import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './AlertsAndReports.css'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Skeleton } from '@mui/material';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AlertsAndReports() {
  const [alertsAndReports, setAlertsAndReports] = useState([])
  const [value, setValue] = useState(0);


  const { data, loading } = useFetchSecurityData('alertsAndReports.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawIncidents = (data) ?? []
      setAlertsAndReports(rawIncidents)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function createAlertdata(
    alert: string,
    date: string,
  ) {
    return { alert, date };
  }

  function createReportdata(
    report: string,
    date: string,
  ) {
    return { report, date };
  }

  const alertRows = alertsAndReports.map((item) => createAlertdata(item.name, item.date))
  const reportRows = alertsAndReports.map((item) => createReportdata(item.name, item.date))

  return (
    <div className='alerts'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab color='secondary' label={`Alerts(${alertRows.length})`} {...a11yProps(0)} />
          <Tab label={`Reports (${reportRows.length})`} {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Tab content #1 */}
      {data ? (<TabPanel value={value} index={0}>
        <TableContainer sx={{ height: '400px', overflow: 'hidden' }}>
          <Table aria-label="alert table">
            <TableHead>
              <TableRow sx={{ borderTop: '1px solid #515151' }}>
                <TableCell>Alert</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alertRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: '60%' }}>{row.alert}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant='outlined' color='secondary' sx={{ width: '100px', borderRadius: 28, top: '30px', float: 'right' }}>View All</Button>
      </TabPanel>) : (<Skeleton variant="rectangular" animation="wave" height={400} />)}


      {/* Tab content #2 */}
      <TabPanel value={value} index={1}>
        <TableContainer sx={{ height: '400px', overflow: 'hidden' }}>
          <Table aria-label="report table">
            <TableHead >
              <TableRow sx={{ borderTop: '1px solid #515151' }}>
                <TableCell>Report</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: '60%' }}>{row.report}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant='outlined' color='secondary' sx={{ width: '100px', borderRadius: 28, top: '30px', float: 'right' }}>View All</Button>
      </TabPanel>
    </div>
  );
}