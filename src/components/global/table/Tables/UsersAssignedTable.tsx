import React, { FC, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useFetchSecurityData from '../../../../hooks/useFetchSecurityData';

interface TableComponent {}


const UsersAssignedTable: FC<TableComponent> = () =>  {
  const [users, setUsers] = useState([])

  const { data, loading } = useFetchSecurityData('usersAssigned.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawUsers = (data) ?? []
      setUsers(rawUsers)
    } catch (err) {
      console.error(err)
    }
  }

  function createData(
    firstName: string,
    lastName: string,
    email: string,
    roles: string,
    organization: string,
    lastLogin: string,
  ) {
    return { firstName, lastName, email, roles, organization, lastLogin };
  }

  const rows = users.map((item) => createData(item.firstName, item.lastName, item.email, item.roles, item.organization, item.lastLogin))
  
  return (
    <>
    <div className='top-controls'>
      <Stack direction="row" spacing={1}>
        <Button className='hover-state' color='secondary' sx={{fontWeight:'200'}}>Users ({rows.length}) </Button>
        <Button className='hover-state' color='secondary' sx={{fontWeight:'200'}}>Roles ({rows.length}) </Button>
        <Button className='hover-state' color='secondary' sx={{fontWeight:'200'}}>Org Profile ({rows.length}) </Button>
      </Stack>
      <Button color='secondary' endIcon={<FilterAltIcon />}>
        Filter By
      </Button>
    </div>
      <TableContainer>
      <Table className='border table' aria-label="incidentId table">
        <TableHead>
          <TableRow sx={{borderTop:'1px solid #515151'}}>
            <TableCell sx={{p:'7px 0', ml:2, fontSize:'13px'}}>First Name</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Last Name</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Business Email</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>Roles</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>Organization</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>Last Log In</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              className='row'
              sx={{p:0}}
            >
              <TableCell component="th" scope="row" sx={{color:'#fafafa'}}>
                <span>{row.firstName}</span>
              </TableCell>
              <TableCell className='description' sx={{p:0}}>{row.lastName}</TableCell>
              <TableCell sx={{p:0}}>{row.email}</TableCell>
              <TableCell sx={{p:0}}>{row.roles}</TableCell>
              <TableCell sx={{p:0}}>{row.organization}</TableCell>
              <TableCell sx={{p:0, color:'gray', fontWeight:'200', fontSize:'13px'}}>{row.lastLogin}</TableCell>
              <TableCell sx={{p:0, textAlign:'center'}}>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className='bottom-control'>
      <FormGroup>
                <FormControlLabel
                    style={{ 
                        color: 'white',
                        fontFamily: 'Graphik',
                        fontStyle: 'normal',
                        fontWeight: 500,
                    }}
                    control={
                    <Checkbox 
                    color="default"
                    />} 
                    label="Show Deactivated"

                />
            </FormGroup>
      <span className='row-count'>Showing: {rows.length} of {rows.length}</span>
      <Button variant='outlined' color='secondary' sx={{width:'100px', borderRadius: 28, position:'absolute', right:'0'}}>View All</Button>
    </div>
  </>

)}

export default UsersAssignedTable;
