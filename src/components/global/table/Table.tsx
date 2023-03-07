import React, { FC, useEffect, useState } from 'react';
import './Table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import { IconButton, Button, Box, ButtonGroup, Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import useModal from '../../../hooks/useModal';
import SideModal from '../SideModal/SideModal';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';

interface TableComponent { }

const TableComponent: FC<TableComponent> = () => {
  const [incidents, setIncidents] = useState([])
  const { toggleDrawer, state } = useModal()
  const { data, loading } = useFetchSecurityData('incidents.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawIncidents = (data) ?? []
      setIncidents(rawIncidents)
    } catch (err) {
      console.error(err)
    }
  }

  function createData(
    incidentId: string,
    description: string,
    createdBy: string,
    followUp: string,
  ) {
    return { incidentId, description, createdBy, followUp };
  }

  const rows = incidents.map((item) => createData(item.id, item.description, item.date, item.followUp))

  return (
    <>
      <SideModal state={state} toggleDrawer={toggleDrawer} data={data} />
      <div className='top-controls'>
        <Stack direction="row" spacing={1}>
          <Button className='hover-state' color='secondary' sx={{ fontWeight: '200' }}>Incidents ({rows.length}) </Button>
          <Button className='hover-state' color='secondary' sx={{ fontWeight: '200' }}>Requests ({rows.length}) </Button>
          <Button className='hover-state' color='secondary' sx={{ fontWeight: '200' }}>Alarms ({rows.length}) </Button>
        </Stack>
        <Button color='secondary' endIcon={<FilterAltIcon />}>
          Filter By
        </Button>
      </div>

      {
        data ? (<> <TableContainer>
          <Table className='border table' aria-label="incidentId table">
            <TableHead>
              <TableRow sx={{ borderTop: '1px solid #515151' }}>
                <TableCell sx={{ p: '7px 0', ml: 2, fontSize: '13px' }}>Incident Id</TableCell>
                <TableCell sx={{ p: '7px 0', fontSize: '13px' }}>Description</TableCell>
                <TableCell sx={{ p: '7px 0', fontSize: '13px' }}>Created By</TableCell>
                <TableCell sx={{ p: '7px 0', mr: '7px', fontSize: '13px' }}>Follow Up</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  className='row'
                  sx={{ p: 0 }}
                  onClick={toggleDrawer('right', true, index)}
                >
                  <TableCell component="th" scope="row" sx={{ color: '#fafafa' }}>
                    <div className='incident'>
                      <WarningRoundedIcon color='warning' />
                      <span>{row.incidentId}</span>
                    </div>
                  </TableCell>
                  <TableCell className='description' sx={{ p: 0 }}>{row.description}</TableCell>
                  <TableCell sx={{ p: 0, color: 'gray', fontWeight: '200', fontSize: '13px' }}>{row.createdBy}</TableCell>
                  <TableCell sx={{ p: 0, textAlign: 'center' }}>
                    <IconButton color="secondary" aria-label="follow up">
                      <EmojiFlagsOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
          <div className='bottom-control'>
            <span className='row-count'>Showing: {rows.length} of {rows.length}</span>
            <Button variant='outlined' color='secondary' sx={{ width: '100px', borderRadius: 28, position: 'absolute', right: '0' }}>View All</Button>
          </div></>) : (<LoadingSkeleton height={40} />)
      }
    </>
  )
}

export default TableComponent;

