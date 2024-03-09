import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    indexAxis:'y',
  plugins: {
    title: {
      display: true,
      text: '',
    },
  },
//   responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['16-25', '25-35', '35-55', '55+'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Teenager',
      data: [40,30,20,10],
      backgroundColor:  'rgb(1, 87, 155)',
      
     
    },
    {
      label: 'Middle-aged',
      data: [40,30,20,10],
      backgroundColor: 'rgb(67, 160, 71)',
    },
    {
      label: 'Old',
      data: [40,30,20,10],
      backgroundColor:  'rgb(255, 235, 59)',
    },
  ],
};

export default function AgeGroup() {
  return(
    <div>
    <h1 className='text-md px-10 mt-10'>Age Group</h1>
     <Bar options={options} data={data}/>
     </div>
     );
}
