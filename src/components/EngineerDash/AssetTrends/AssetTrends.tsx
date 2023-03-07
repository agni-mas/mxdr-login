import react, { FC } from 'react';
import GridItem from '../../layout/GridItem/GridItem';
import Button from '@mui/material/Button';
import PieChartComponent from '../../global/PieChart/PieChart';


const styles = {
}

interface AssetTrendsProps { }

const data = []

const AssetTrends: FC<AssetTrendsProps> = () => (
    <GridItem title="Asset Trends">
        <PieChartComponent insideLabel="Overall Health" data={data} type='admin' />
        <Button color='secondary' variant="outlined" style={{ float: 'right', borderRadius: 28, }}>View Details</Button>
    </GridItem>
);

export default AssetTrends;