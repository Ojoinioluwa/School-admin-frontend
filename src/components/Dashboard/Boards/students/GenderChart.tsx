import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';


// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement);
type Data = {
    name: string,
    value: number
  }

const ChartComponent = ({genderData}: {genderData: Data[]}) => {


  // Chart data
  const data = {
    
    datasets: [
      {
        label: 'Gender Distribution',
        data: genderData.map(item => item.value), // values = 31 and 39
        backgroundColor: ['#e9d4ff', '#fee685'], // colors for the pie sections
        hoverOffset: 4,
        width: "100%",
        height: "100%",
      }
    ],
    labels: genderData.map(item => item.name), 
  };

  return (
    <div className=''>
      <h2 className='text-xl font-bold'>Gender Distribution</h2>
      <div className='flex justify-center items-center'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ChartComponent;
