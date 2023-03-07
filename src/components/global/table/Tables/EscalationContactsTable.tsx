import React, { FC, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import useFetchSecurityData from '../../../../hooks/useFetchSecurityData';

interface TableComponent {}

const styles = {
  groupIcon: {
  
  },
  connectIcons: {
    color: '#00FFFF'
  },
  email: {
    color: '#00FFFF'
  },
}

const EscalationContactsTable: FC<TableComponent> = () => {
  const [contacts, setContacts] = useState([])
  const { data, loading } = useFetchSecurityData('connectAlign.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawContacts = (data) ?? []
      setContacts(rawContacts)
    } catch (err) {
      console.error(err)
    }
  }

  function createData(
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    location: string,
  ) {
    return { firstName, lastName, email, role, location };
  }
  
  const rows = contacts.map((item) => createData(item.firstName, item.lastName, item.email, item.role, item.location))

return (
    <>
      <TableContainer>
      <Table className='border table' aria-label="incidentId table">
        <TableHead>
          <TableRow sx={{borderTop:'1px solid #515151'}}>
            <TableCell>
              <GroupIcon fontSize='small' />
            </TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Contacts</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Role</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>Location</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px', textAlign:'center'}}>Connect</TableCell>
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
                <div style={{ alignItems: 'left' }}>
                <AccountCircleIcon />
                </div>
              </TableCell>
              <TableCell className='description' sx={{p:0}}>
                <div>{row.firstName} {row.lastName}</div>
                <div style={styles.email}>{row.email}</div>
              </TableCell>
              <TableCell sx={{p:0, fontWeight:'200', fontSize:'13px'}}>{row.role}</TableCell>
              <TableCell sx={{p:0, fontWeight:'200', fontSize:'13px'}}>{row.location}</TableCell>
              <TableCell sx={{p:0, textAlign:'center'}}>
                <div style={styles.connectIcons}>
                  <MailIcon sx={{ marginRight: 2 }}/>
                  <ChatIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
)}

export default EscalationContactsTable;
