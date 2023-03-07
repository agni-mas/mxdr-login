import { Space } from '@looker/components';
import { PlaylistAddOutlined } from '@mui/icons-material';
import React, { FC } from 'react';
import { PieChart, Pie, Legend, Cell, Label, Surface, Symbols } from "recharts";
import './PieChart.css'
interface PieChartProps {
  data: {
    name: string,
    value: number,
    fill: string,
  }[],
  insideLabel: string,
  type: string
}

const PieChartComponent: FC<PieChartProps> = ({ data, insideLabel, type }) => {
  let sum = data.reduce(function (prev, current) {
    return prev + +current.value
  }, 0);

  const CustomLabel = (props) => {
    const { cx, cy } = props.viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy - 5}
          fill="white"
          className="pie-chart-label"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan alignmentBaseline="middle" fontSize="32px" fontFamily="Graphik">
            {props.sum}
          </tspan>
        </text>
        <text
          x={cx}
          y={cy + 20}
          fill="white"
          className="pie-chart-label"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="12px" fontFamily="Graphik">
            {props.label}
          </tspan>
        </text>
      </>
    )
  }

  const renderLegend = ({ payload }: any) => {
    return (
      <>
        {type == 'analyst' ? (

          <ul className='legend'>
            {
              payload.map((entry: any, index: number) => (
                <li className="legend--item" key={index}>
                  <Surface width={20} height={10}>
                    <Symbols cx={5} cy={5} type="circle" size={100} fill={entry.color} />
                  </Surface>
                  <div>
                    {
                      type == 'analyst' ? (<span className='legend--item-name'>{entry.value} ({`${entry.payload.percent.toFixed(2) * 100}%`})</span>) : (
                        <div className='legend--item__container'>
                          <span className="legend--item-number">{entry.payload.payload.value}</span>
                          <span className='legend--item-name block'>{entry.value} ({`${entry.payload.percent.toFixed(2) * 100}%`})</span>
                        </div>
                      )
                    }
                  </div>
                </li>
              ))
            }
          </ul >
        ) : (
          <ul className='admin-legends'>
            {
              payload.map((entry: any, index: number) => (
                <li className="legend--item" key={index}>
                  <Surface width={30} height={20} style={{ marginTop: '22px' }}>
                    <Symbols cx={10} cy={10} type="circle" size={130} fill={entry.color} />
                  </Surface>
                  <div>
                    <div className='legend--item__container'>
                      <span className="legend--item-number">{entry.payload.payload.value}</span>
                      <span className='legend--item-name block'>{entry.value} ({`${entry.payload.percent.toFixed(2) * 100}%`})</span>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul >
        )
        }
      </>
    )
  }

  return (
    <PieChart width={210} height={210}>
      {type === 'admin' ? (
        <Pie
          dataKey="value"
          data={data}
          innerRadius={70}
          outerRadius={100}
          stroke="black"
          cx='50%' cy='180%'
        >
          {data.map((d) => (
            <Cell key={d.name} fill={d.fill} />
          ))}
          <Label width={30} position="center"
            content={<CustomLabel sum={sum} label={insideLabel} />}
          />
        </Pie>) : (<Pie
          dataKey="value"
          data={data}
          innerRadius={70}
          outerRadius={100}
          stroke="black"
          cx='50%' cy='130%'
        >
          {data.map((d) => (
            <Cell key={d.name} fill={d.fill} />
          ))}
          <Label width={30} position="center"
            content={<CustomLabel sum={sum} label={insideLabel} />}
          />
        </Pie>)}

      <Legend content={renderLegend} wrapperStyle={{ top: 50, left: 250 }} />
    </PieChart >
  )
}


export default PieChartComponent;