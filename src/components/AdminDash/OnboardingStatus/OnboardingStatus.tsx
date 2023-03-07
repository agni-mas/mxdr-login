import react, { FC, useState, useEffect } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import PieChartComponent from '../../global/PieChart/PieChart';
import { Skeleton } from '@mui/material';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';


const styles = {

}

interface LCPAlertsProps { }

const LCPAlerts: FC<LCPAlertsProps> = () => {
    const [onboardingStatus, setOnboardingStatus] = useState([])

    const { data, loading } = useFetchSecurityData('onboardingStatus.json')

    useEffect(() => {
        fetchData()
    }, [loading, data])

    const fetchData = () => {
        try {
            let rawData = (data) ?? []
            setOnboardingStatus(rawData)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <GridItem title="Onboarding Status">
            {data ? (<PieChartComponent insideLabel="Total Onboarding" data={onboardingStatus} type='admin' />) : (<Skeleton variant="rectangular" animation="wave" height={200} />)}
            <Button color='secondary' variant="outlined" style={{ float: 'right', borderRadius: 28, }}>View Details</Button>
        </GridItem>
    )
}

export default LCPAlerts;