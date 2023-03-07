import react, { FC, useEffect, useState } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import PieChartComponent from '../../global/PieChart/PieChart';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Skeleton } from '@mui/material';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';

interface HealthStatusProps { }

const HealthStatus: FC<HealthStatusProps> = () => {
    const [healthStatus, setHealthStatus] = useState([])

    const { data, loading } = useFetchSecurityData('HealthStatus.json')

    useEffect(() => {
        fetchData()
    }, [loading, data])

    const fetchData = () => {
        try {
            let rawData = (data) ?? []
            setHealthStatus(rawData)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <GridItem title="Health Status">
            <Button
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
                color='secondary'
                variant='outlined'
                sx={{ marginBottom: '40px' }}
            >
                Device Health
            </Button>
            {data ? (<PieChartComponent insideLabel="Total Health" data={healthStatus} type='analyst' />) : (<Skeleton variant="rectangular" animation="wave" height={200} />)}

            <Button color='secondary' variant="outlined" style={{ float: 'right', borderRadius: 28 }}>View Details</Button>
        </GridItem>
    )
}


export default HealthStatus;