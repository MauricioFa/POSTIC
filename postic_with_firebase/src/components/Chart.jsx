import React from 'react';
import { connect } from 'react-redux';
import { XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts';
import Title from './Title';

const Chart = () => {
  const demoChart = [
    { time: '00:00', amount: 0 },
    { time: '03:00', amount: 1200 },
    { time: '06:00', amount: 600 },
    { time: '09:00', amount: 800 },
    { time: '12:00', amount: 1500 },
    { time: '15:00', amount: 2000 },
    { time: '18:00', amount: 2400 },
    { time: '21:00', amount: 2400 },
    { time: '24:00', amount: undefined },
  ];

  return (
    <>
      <Title>Hoy</Title>
      <ResponsiveContainer>
        <AreaChart
          data={demoChart}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='time' />
          <YAxis>
            <Label angle={270} position='left' style={{ textAnchor: 'middle' }}>
              Ventas ($)
            </Label>
          </YAxis>
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            name='Venta'
            type='monotone'
            dataKey='amount'
            stroke='#556CD6'
            dot={true}
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    demoChart: state.demoChart,
  };
};

export default connect(mapStateToProps, null)(Chart);
