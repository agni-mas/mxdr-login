import './ServiceSummary.css'
import react, { FC, useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from 'recharts';
import { Skeleton } from '@mui/material';
import useFetchSecurityData from '../../../hooks/useFetchSecurityData';

interface ServiceSummary { }

const ChartBar = ({ data }) => {
  return (
    <div className='bars'>
      <div>
        <h3 className='bar-chart-title'>Incidents by urgency</h3>
        {data ? (<ResponsiveContainer height={250} width="100%">
          <BarChart
            layout="vertical"
            data={data}
            barCategoryGap={0}
            barGap={0}
            margin={{ left: 40, right: 50, top: 40 }}
          >
            <XAxis type="number"
              domain={[0, 100]}
              tickLine={false}
              scale='linear'
              tickCount={10}
              axisLine={false}
              padding={{ left: 20 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke='white'
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="severity" />
          </BarChart>
        </ResponsiveContainer>) : (<Skeleton variant="rectangular" animation="wave" height={300} />)}

      </div>

      <div>
        <h3 className='bar-chart-title'>Requests by urgency</h3>
        {data ? (<ResponsiveContainer height={250} width="100%">
          <BarChart
            layout="vertical"
            data={data}
            barCategoryGap={0}
            barGap={0}
            margin={{ left: 40, right: 50, top: 40 }}
          >
            <XAxis type="number"
              domain={[0, 100]}
              tickLine={false}
              scale='linear'
              tickCount={10}
              axisLine={false}
              padding={{ left: 20 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke='white'
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="severity" />
          </BarChart>
        </ResponsiveContainer>) : (<Skeleton variant="rectangular" animation="wave" height={300} />)}
      </div>
    </div>
  );
}

const ServiceSummary: FC<ServiceSummary> = () => {
  const [serviceSummaries, setServiceSummaries] = useState([])

  const { data, loading } = useFetchSecurityData('serviceSummary.json')

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
    <>
      <ChartBar data={serviceSummaries} />
    </>
  )
}

export default ServiceSummary;