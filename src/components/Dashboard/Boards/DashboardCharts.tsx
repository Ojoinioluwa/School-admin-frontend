// import  { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'JAN',
      teachers: 4000,
      students: 2400,
    },
    {
      name: 'FEB',
      teachers: 3000,
      students: 1398,
    },
    {
      name: 'Mar',
      teachers: 2000,
      students: 2290,
    },
    {
      name: 'APR',
      teachers: 2780,
      pv: 3908,
      students : 2000,
    },
    {
      name: 'MAY',
      teachers: 1890,
      students: 4800,
    },
    {
      name: 'JUNE',
      teachers: 2090,
      students: 5700,
    },
    {
      name: 'JULY',
      teachers: 2620,
      students: 5600,
    },
    {
      name: 'AUG',
      teachers: 2300,
      students: 3607,
    },
    {
      name: 'SEPT',
      teachers: 2350,
      students: 5400,
    },
  ];

function DashboardCharts() {
  return (
    <ResponsiveContainer width="100%" height="90%">
    <BarChart
      barSize={10}
      barGap={0}
      
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid  />
      <Legend
        layout="horizontal" 
        align="right"      
        verticalAlign="top"
        wrapperStyle={{

            top: 0,  
            right: 30, 
        }}
        />

      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Bar dataKey="students" fill="#fee685" activeBar={<Rectangle   />} />
      <Bar dataKey="teachers" fill="#bedbff" activeBar={<Rectangle  />} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default DashboardCharts








