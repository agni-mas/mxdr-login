import React, { FC } from 'react';
import '../Table.css';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

interface TableComponent {}

function createData(
    systemType: string,
    number: string,
    type: string,
    organization: string,
    vmType: string,
    lastLogIn: string,
    openDuration: string,
    duration: string,
    responseTime: string,
  ) {
    return { systemType, number, type, organization, vmType, lastLogIn, openDuration, duration, responseTime };
  }
  
  const rows = [
    createData('Critical System', '172.16.216.201', 'Flare-VM', 'CSS Experience', 'Application Server', '2 days', '20 minutes', '6 hours', '30 minutes'),
  ];

const CriticalIncidentTable: FC<TableComponent> = () => (
    <>
      <TableContainer>
      <Table className='border table' aria-label="incidentId table">
        {rows.map((row, index) => (
          <TableHead>
          <TableRow sx={{borderTop:'1px solid #515151'}}>
            <TableCell sx={{p:'7px 0', ml:2, fontSize:'13px'}}>{row.systemType}</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>{row.number}</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>{row.type}</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>{row.organization}</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>{row.vmType}</TableCell>
          </TableRow>
        </TableHead>
        ))}
        {/* <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              className='row'
              sx={{p:0}}
            >
              <TableCell component="th" scope="row" sx={{color:'#fafafa'}}>
                <div className='incident'>
                  <WarningRoundedIcon color='warning'/>
                <span>{row.lastLogIn}</span>
                </div>
              </TableCell>
              <TableCell className='description' sx={{p:0}}>{row.lastLogIn}</TableCell>
              <TableCell sx={{p:0, color:'gray', fontWeight:'200', fontSize:'13px'}}>{row.lastLogIn}</TableCell>
              <TableCell sx={{p:0, textAlign:'center'}}>
                <IconButton color="secondary" aria-label="follow up">
                  <EmojiFlagsOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
    <div className='bottom-control'>
      <Button variant='outlined' color='secondary' sx={{width:'100px', borderRadius: 28, position:'absolute', right:'0'}}>View All</Button>
    </div>
  </>

);

export default CriticalIncidentTable;
