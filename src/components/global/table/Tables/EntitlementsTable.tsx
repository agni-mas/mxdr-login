import React, { FC, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeviceTypesTable from './DeviceTypesTable';
import useFetchSecurityData from '../../../../hooks/useFetchSecurityData';

interface TableComponent {}

const EntitlementsTable: FC<TableComponent> = () => {
  const [entitlements, setEntitlements] = useState([])
  
  const { data, loading } = useFetchSecurityData('entitlements.json')

  useEffect(() => {
    fetchData()
  }, [data, loading])

  const fetchData = () => {
    try {
      let rawEntitlements = (data) ?? []
      setEntitlements(rawEntitlements)
    } catch (err) {
      console.error(err)
    }
  }

  function createEntitlementData(
    searchCode: string,
    description: string,
    startDate: string,
    endDate: string,
    purchased: number,
    used: number,
    available: number,
  ) {
    return { searchCode, description, startDate, endDate, purchased, used, available };
  }

  const entitlementRow = entitlements.map((item) => createEntitlementData(item.searchCode, item.description, item.startDate, item.endDate, item.purchased, item.used, item.available))
  
  return (
    <>
      <TableContainer>
      <Table className='border table' aria-label="entitlements table">
        <TableHead>
          <TableRow sx={{borderTop:'1px solid #515151'}}>
            <TableCell sx={{p:'7px 15px', ml:2, fontSize:'13px'}}>Entitlement Search Code</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Description</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Start Date</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>End Date</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Purchased</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Used</TableCell>
            <TableCell sx={{p:'7px 0', mr:'7px', fontSize:'13px'}}>Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entitlementRow.map((row, index) => (
            <TableRow
              key={index}
              className='row'
              sx={{p:0}}
            >
              <TableCell component="th" scope="row" sx={{color:'#fafafa'}}>
                <span>{row.searchCode}</span>
              </TableCell>
              <TableCell className='description' sx={{p:0}}>{row.description}</TableCell>
              <TableCell sx={{p:0}}>{row.startDate}</TableCell>
              <TableCell sx={{p:0}}>{row.endDate}</TableCell>
              <TableCell sx={{p:0}}>{row.purchased}</TableCell>
              <TableCell sx={{p:0}}>{row.used}</TableCell>
              <TableCell sx={{p:0}}>{row.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <DeviceTypesTable />
  </>
  )}

  export default EntitlementsTable;