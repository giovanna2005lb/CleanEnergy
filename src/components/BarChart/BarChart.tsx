'use client'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Geladeira', 'Máquina de Lavar', 'TV', 'Computador', 'Micro-ondas'],
  datasets: [
    {
      label: 'Gastos em R$',
      data: [150, 100, 80, 120, 50],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      yAxisID: 'y', // Eixo Y para gastos
    },
    {
      label: 'Consumo em kWh',
      data: [200, 150, 100, 180, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      yAxisID: 'y1', // Eixo Y para consumo
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Gastos Mensais dos Eletrodomésticos',
    },
  },
};

const BarChart: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="w-full max-w-lg">
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default BarChart;
