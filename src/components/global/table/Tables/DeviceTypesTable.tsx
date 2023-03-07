import React, { FC, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useFetchSecurityData from '../../../../hooks/useFetchSecurityData';

interface TableComponent {}

const DeviceTypesTable: FC<TableComponent> = () => {
  const [deviceTypes, setDeviceTypes] = useState([])
  
  const { data, loading } = useFetchSecurityData('deviceTypes.json')

  useEffect(() => {
    fetchData()
  }, [data, loading])

  const fetchData = () => {
    try {
      let rawDeviceTypes = (data) ?? []
      setDeviceTypes(rawDeviceTypes)
    } catch (err) {
      console.error(err)
    }
  }

  function createDeviceTypesData(
    deviceType: string,
    used: number,
  ) {
    return { deviceType, used }
  }
  
  const deviceTypesRow = deviceTypes.map((item) => createDeviceTypesData(item.deviceType, item.used))

  return (
    <>
    <TableContainer sx={{ paddingTop: 5 }}>
      <Table className='border table' aria-label="entitlements table">
        <TableHead>
          <TableRow sx={{backgroundColor:'#7500C0'}}>
            <TableCell sx={{p:'7px 15px', ml:2, fontSize:'13px'}}>Device Type</TableCell>
            <TableCell sx={{p:'7px 0', fontSize:'13px'}}>Used</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deviceTypesRow.map((row, index) => (
            <TableRow
              key={index}
              className='row'
              sx={{ border:'1px solid #515151' }}
            >
              <TableCell component="th" scope="row" sx={{color:'#fafafa'}}>
                <span>{row.deviceType}</span>
              </TableCell>
              <TableCell className='description' sx={{p:0}}>{row.used}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )}

  export default DeviceTypesTable;