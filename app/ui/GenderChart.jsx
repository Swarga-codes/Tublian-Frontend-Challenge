import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 55, 15],
      backgroundColor: [
        'rgb(1, 87, 155)',
        'rgb(67, 160, 71)',
        'rgb(255, 235, 59)',
        
      ],
      borderColor: [
        'rgb(1, 87, 155)',
        'rgb(67, 160, 71)',
        'rgb(255, 235, 59)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function GenderChart() {
  return (
    <div>
        <h1 className='text-md px-10 mt-10'>Gender</h1>
  <Doughnut data={data} className='mt-10'/>
  </div>
  );
}
