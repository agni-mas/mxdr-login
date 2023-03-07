import './ServiceActivity.css'
import react, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PieChartComponent from '../../global/PieChart/PieChart';
import GridItem from '../../layout/GridItem/GridItem';
import { PieChart, Pie, Cell, Label, Tooltip, Legend, Surface, Symbols } from 'recharts';
import { Skeleton } from '@mui/material';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';


interface ServiceActivity { }

const styles = {
  label: {
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 16,
  }
}

const ChartPie = ({ data, label, showLegend }) => {

  const renderLegend = ({ payload }: any) => (
    <ul className='pie-legend'>
      {
        payload.map((entry: any, index: number) => (
          <li className="pie-legend--item" key={index}>
            <Surface width={20} height={10}>
              <Symbols cx={5} cy={5} type="circle" size={100} fill={entry.color} />
            </Surface>
            <span className='legend--item-name'>{entry.value}</span>
          </li>
        ))
      }
    </ul>
  )

  return (
    <PieChart width={145} height={145}>
      <Pie
        dataKey="value"
        data={data}
        innerRadius={50}
        outerRadius={70}
        stroke="black"
      >
        {data.map((d) => (
          <Cell key={d.name} fill={d.fill} />
        ))}
        <Label position="center" fill="white" style={styles.label}>{label}</Label>
      </Pie>
      {/* <Tooltip /> */}
      {showLegend ? (<Legend content={renderLegend} />) : (<></>)}

    </PieChart>
  )
}

const ServiceActivity: FC<ServiceActivity> = () => {
  const [serviceSummaries, setServiceSummaries] = useState([])

  const { data, loading } = useFetchSecurityData('serviceActivity.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawData = (data) ?? []
      setServiceSummaries(rawData)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <GridItem title="Service Activity (Last 7 days)">
      <Button
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        color='secondary'
        variant='outlined'
      >
        My Org
      </Button>
      {data ? (<div className='pie-charts'>
        <ChartPie label='Open' data={serviceSummaries} showLegend={true} />
        <ChartPie label='In progress' data={serviceSummaries} showLegend={false} />
        <ChartPie label='Closed' data={serviceSummaries} showLegend={false} />
      </div>) : (<Skeleton variant="rectangular" animation="wave" height={250} />)}

    </GridItem>)
}

export default ServiceActivity;