import './IncidentTrends.css'
import { Skeleton } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Surface,
  Symbols,
  Legend
} from "recharts";
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';

interface IncidentTrends {
}

const ChartArea = () => {
  const [incidents, setIncidents] = useState([])
  const { data, loading } = useFetchSecurityData('incidentTrends.json')

  useEffect(() => {
    fetchData()
  }, [loading, data])

  const fetchData = () => {
    try {
      let rawData = (data) ?? []
      setIncidents(rawData)
    } catch (err) {
      console.error(err)
    }
  }

  const renderLegend = ({ payload }: any) => (
    <ul className='incident-legend'>
      {
        payload.map((entry: any, index: number) => (
          <li className="legend--item" key={index}>
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

    data ? (<ResponsiveContainer width='77%' height={300} >
      <AreaChart data={incidents}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Area
          fillOpacity={1}
          dataKey="Emergency"
          stackId="1"
          stroke="#ff6b23"
          fill="#ff6b23"
        />
        <Area
          fillOpacity={1}
          dataKey="Critical"
          stackId="1"
          stroke="#ffe944"
          fill="#ffe944"
        />
        <Area
          fillOpacity={1}
          dataKey="Warning"
          stackId="1"
          stroke="#ff4394"
          fill="#ff4394"
        />
        <Area
          fillOpacity={1}
          dataKey="Informational"
          stackId="1"
          stroke="#00ffff"
          fill="#00ffff"
        />
        <Legend content={renderLegend} />
      </AreaChart>
    </ResponsiveContainer >) : (<Skeleton variant="rectangular" animation="wave" height={400} />)


  )
}

const IncidentTrends: FC<IncidentTrends> = () => (
  <div>
    <ChartArea />
  </div>
);

export default IncidentTrends;
