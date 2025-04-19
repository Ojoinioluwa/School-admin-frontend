// import  { PureComponent } from 'react';
import { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const data = [
    {
      name: 'Grade 1',
      Male: 4000,
      Female: 2400,
    },
    {
      name: 'Grade 2',
      Male: 3000,
      Female: 1398,
    },
    {
      name: 'Grade 3',
      Male: 2000,
      Female: 2290,
    },
    {
      name: 'Grade 4',
      Male: 2780,
      pv: 3908,
      students : 2000,
    },
    {
      name: 'Grade 5',
      Male: 1890,
      Female: 4800,
    },
    {
      name: 'Grade 6',
      Male: 2090,
      Female: 5700,
    },
    {
      name: 'Grade 7',
      Male: 2620,
      Female: 5600,
    },
    {
      name: 'Grade 8',
      Male: 2300,
      Female: 3607,
    },
    {
      name: 'Grade 9',
      Male: 2350,
      Female: 5400,
    },
  ];

const data1 = [
    { name: 'Male', value: 400 },
    { name: 'Female', value: 300 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: {cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number, index: number}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


//   let this be the students attendance rate

function StudentsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      barSize={5}
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
      <Bar dataKey="Male" fill="#172554" activeBar={<Rectangle   />} />
      <Bar dataKey="Female" fill="red" activeBar={<Rectangle  />} />
    </BarChart>
  </ResponsiveContainer>
  )
}





// the pie chart for ratio of male to female

 class PieCharts extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}


export  {StudentsChart, PieCharts}








